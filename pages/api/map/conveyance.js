import { supabase } from './mapdb'

const CONVEYANCE = 'Conveyance'
const RATE_PER_KM = 4

export default async function handler (req, res) {
  if (req.method === 'GET') return handleGet(req, res)
  if (req.method === 'PATCH') return handlePatch(req, res)
  return res.status(405).json({ message: 'Method not allowed' })
}

async function handleGet (req, res) {
  const { userId, month, format, companyName, userName } = req.query

  if (!userId || isNaN(Number(userId))) {
    return res.status(400).json({ message: 'Valid User ID Required' })
  }
  if (!month || !/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) {
    return res.status(400).json({ message: 'Month must be in YYYY-MM format' })
  }

  const startDate = `${month}-01T00:00:00.000Z`
  const endDate = new Date(
    Date.UTC(Number(month.slice(0, 4)), Number(month.slice(5, 7)), 1)
  ).toISOString()

  try {
    const { data, error } = await supabase
      .from(CONVEYANCE)
      .select('*')
      .eq('User_ID', userId)
      .gte('created_at', startDate)
      .lt('created_at', endDate)
      .order('created_at', { ascending: true })

    if (error) throw error

    if (format === 'csv') {
      const csv = buildConveyanceCsv(data, {
        companyName: companyName || 'InRain Construction Pvt Ltd.',
        userName: userName || 'User',
        month
      })
      const safeName = String(userName || 'conveyance').replace(
        /[^\w.-]+/g,
        '_'
      )
      res.setHeader('Content-Type', 'text/csv; charset=utf-8')
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${safeName}-conveyance-${month}.csv"`
      )
      return res.status(200).send(csv)
    }

    if (format === 'ledger') {
      const { rows, totalKm, totalAmount } = buildConveyanceRows(data)
      return res.status(200).json({ rows, totalKm, totalAmount })
    }

    // Default: raw array, same as the Expense API
    return res.status(200).json(data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
}

async function handlePatch (req, res) {
  const { rows } = req.body || {}

  if (!Array.isArray(rows) || rows.length === 0) {
    return res.status(400).json({ message: 'No rows to update' })
  }

  // Validate everything first, so we don't half-save on bad input
  for (const row of rows) {
    if (!row.id) {
      return res.status(400).json({ message: 'Row is missing an id' })
    }
    if (!row.date || isNaN(new Date(row.date).getTime())) {
      return res.status(400).json({ message: `Invalid date for row ${row.id}` })
    }
    if (hasKm(row.km)) continue // amount will be computed from km

    const amount = Number(row.amount)
    if (
      row.amount === '' ||
      row.amount == null ||
      !Number.isFinite(amount) ||
      amount < 0
    ) {
      return res
        .status(400)
        .json({ message: `Row ${row.id} needs KM or a valid amount` })
    }
  }

  try {
    const updates = rows.map(row => {
      const withKm = hasKm(row.km)
      const payload = {
        created_at: new Date(row.date).toISOString(),
        From: row.from,
        To: row.to,
        site: row.location,
        km: withKm ? Number(row.km) : null,
        amount: rowAmount(row.km, row.amount)
      }
      return supabase.from(CONVEYANCE).update(payload).eq('id', row.id)
    })

    const results = await Promise.all(updates)
    const failed = results.filter(r => r.error)

    if (failed.length > 0) {
      console.error('Some updates failed:', failed)
      return res
        .status(500)
        .json({ message: `${failed.length} row(s) failed to update` })
    }

    return res.status(200).json({ message: 'Saved', updated: rows.length })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
}

// ---------- shared helpers ----------

function hasKm (km) {
  return km != null && km !== '' && Number(km) > 0
}

function round2 (n) {
  return Math.round(n * 100) / 100
}

function calcAmount (km) {
  return round2(Number(km) * RATE_PER_KM)
}

// km present -> km x rate, otherwise use the stored/manual amount
function rowAmount (km, amount) {
  return hasKm(km) ? calcAmount(km) : round2(Number(amount) || 0)
}

function escapeCsvField (value) {
  if (value == null) return ''
  let str = String(value)
  // Prevent CSV formula injection in Excel
  if (/^[=+\-@]/.test(str)) str = `'${str}`
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`
  return str
}

function formatLedgerDate (isoDate) {
  const d = new Date(isoDate)
  const day = d.getUTCDate()
  const monthShort = d.toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC'
  })
  return `${day}-${monthShort}`
}

function toIsoDate (createdAt) {
  return new Date(createdAt).toISOString().slice(0, 10) // YYYY-MM-DD
}

function monthLabel (month) {
  const [year, mm] = month.split('-')
  const d = new Date(Date.UTC(Number(year), Number(mm) - 1, 1))
  const monthFull = d.toLocaleString('en-US', {
    month: 'long',
    timeZone: 'UTC'
  })
  return `${monthFull}-${year}`
}

// Structured rows with raw ISO dates + DB id, for editing.
// Amount is recomputed from km so the output is always consistent.
function buildConveyanceRows (rows) {
  let totalKm = 0
  let totalAmount = 0

  const result = rows.map(row => {
    const withKm = hasKm(row.km)
    const km = withKm ? Number(row.km) : 0
    const amount = rowAmount(row.km, row.amount)
    totalKm += km
    totalAmount += amount

    return {
      id: row.id,
      date: toIsoDate(row.created_at),
      from: row.From || '',
      to: row.To || '',
      location: row.site || '',
      km: withKm ? km : '', // blank, not 0, so the UI shows an editable amount
      amount: amount.toFixed(2)
    }
  })

  return {
    rows: result,
    totalKm: round2(totalKm),
    totalAmount: totalAmount.toFixed(2)
  }
}

function buildConveyanceCsv (rows, { companyName, userName, month }) {
  const { rows: structured, totalKm, totalAmount } = buildConveyanceRows(rows)
  const lines = []

  lines.push(`,,${escapeCsvField(companyName)},,,`)
  lines.push(
    `,,${escapeCsvField(
      `${userName}'s Conveyance Dtl for the m/o (${monthLabel(month)})`
    )},,,`
  )
  lines.push('Date,From,To,Site,KM,Amount')

  let lastDateShown = null
  structured.forEach(row => {
    const displayDate = row.date ? formatLedgerDate(row.date) : ''
    const dateCell = displayDate === lastDateShown ? '' : displayDate
    lastDateShown = displayDate

    lines.push(
      [
        dateCell,
        escapeCsvField(row.from),
        escapeCsvField(row.to),
        escapeCsvField(row.location),
        row.km,
        row.amount
      ].join(',')
    )
  })

  lines.push(`,,,Total,${totalKm},${totalAmount}`)

  return lines.join('\n')
}

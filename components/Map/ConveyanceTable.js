import { useEffect, useMemo, useState } from 'react'

const RATE_PER_KM = 4

// Same rules as the API, so UI and server always agree
function hasKm (km) {
  return km != null && km !== '' && Number(km) > 0
}

function calcAmount (km) {
  return Math.round((Number(km) || 0) * RATE_PER_KM * 100) / 100
}

// Rows with km: amount = km x rate (locked).
// Rows without km: amount is whatever was typed (e.g. travelling charge).
function withAmounts (rows) {
  return rows.map(row =>
    hasKm(row.km) ? { ...row, amount: calcAmount(row.km).toFixed(2) } : row
  )
}

const inputClass =
  'w-full rounded border border-transparent px-1 py-0.5 hover:border-slate-300 focus:border-slate-400 focus:outline-none'

export default function ConveyanceTable ({
  isOpen,
  onClose,
  userId,
  month,
  companyName,
  userName
}) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isOpen || !userId || !month) return

    const fetchConveyance = async () => {
      setLoading(true)
      setError(null)
      try {
        const params = new URLSearchParams({
          userId,
          month,
          format: 'ledger'
        })
        const res = await fetch(`/api/map/conveyance?${params.toString()}`)
        const result = await res.json()

        if (!res.ok) {
          setError(result.message || 'Failed to load conveyance')
          setRows([])
          return
        }
        setRows(result.rows)
      } catch (err) {
        console.error(err)
        setError('Failed to load conveyance')
        setRows([])
      } finally {
        setLoading(false)
      }
    }

    fetchConveyance()
  }, [isOpen, userId, month])

  const totals = useMemo(() => {
    const totalKm = rows.reduce(
      (sum, r) => sum + (hasKm(r.km) ? Number(r.km) : 0),
      0
    )
    const totalAmount = rows.reduce(
      (sum, r) => sum + (Number(r.amount) || 0),
      0
    )
    return {
      km: Math.round(totalKm * 100) / 100,
      amount: totalAmount.toFixed(2)
    }
  }, [rows])

  const updateCell = (index, field, value) => {
    setRows(prev => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      return withAmounts(next)
    })
  }

  const handleSave = async () => {
    const invalid = rows.find(r => {
      if (hasKm(r.km)) return false // amount comes from km
      const amount = Number(r.amount)
      return r.amount === '' || !Number.isFinite(amount) || amount < 0
    })
    if (invalid) {
      setError('Rows without KM need an amount of 0 or more.')
      return
    }

    setSaving(true)
    setError(null)
    try {
      const res = await fetch('/api/map/conveyance', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rows })
      })
      const result = await res.json()

      if (!res.ok) {
        setError(result.message || 'Failed to save')
        return
      }
      onClose()
    } catch (err) {
      console.error(err)
      setError('Failed to save changes')
    } finally {
      setSaving(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
      <div className='flex max-h-[85vh] w-full max-w-5xl flex-col rounded-xl bg-white shadow-lg'>
        <div className='flex items-center justify-between border-b border-slate-200 px-5 py-4'>
          <div>
            <h2 className='text-sm font-semibold text-slate-900'>
              {companyName}
            </h2>
            <p className='text-xs text-slate-500'>
              {userName}'s Conveyance Detail — {month}
            </p>
          </div>
          <button
            onClick={onClose}
            className='rounded-md px-2 py-1 text-sm text-slate-500 hover:bg-slate-100'
          >
            ✕
          </button>
        </div>

        <div className='flex-1 overflow-auto px-5 py-4'>
          {loading && <p className='text-sm text-slate-500'>Loading…</p>}
          {error && <p className='mb-3 text-sm text-red-600'>{error}</p>}

          {!loading && rows.length > 0 && (
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='border-b border-slate-300 bg-slate-100 text-left'>
                  <th className='px-2 py-2 font-semibold text-slate-700'>
                    Date
                  </th>
                  <th className='px-2 py-2 font-semibold text-slate-700'>
                    From
                  </th>
                  <th className='px-2 py-2 font-semibold text-slate-700'>To</th>
                  <th className='px-2 py-2 font-semibold text-slate-700'>
                    Site
                  </th>
                  <th className='px-2 py-2 text-right font-semibold text-slate-700'>
                    KM
                  </th>
                  <th className='px-2 py-2 text-right font-semibold text-slate-700'>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.id} className='border-b border-slate-100'>
                    <td className='px-2 py-1'>
                      <input
                        type='date'
                        value={row.date}
                        onChange={e =>
                          updateCell(index, 'date', e.target.value)
                        }
                        className={inputClass}
                      />
                    </td>
                    <td className='px-2 py-1'>
                      <input
                        type='text'
                        value={row.from}
                        onChange={e =>
                          updateCell(index, 'from', e.target.value)
                        }
                        className={inputClass}
                      />
                    </td>
                    <td className='px-2 py-1'>
                      <input
                        type='text'
                        value={row.to}
                        onChange={e => updateCell(index, 'to', e.target.value)}
                        className={inputClass}
                      />
                    </td>
                    <td className='px-2 py-1'>
                      <input
                        type='text'
                        value={row.location}
                        onChange={e =>
                          updateCell(index, 'location', e.target.value)
                        }
                        className={inputClass}
                      />
                    </td>
                    <td className='px-2 py-1 text-right'>
                      <input
                        type='number'
                        min='0'
                        step='any'
                        value={row.km}
                        onChange={e => updateCell(index, 'km', e.target.value)}
                        className={`${inputClass} text-right`}
                      />
                    </td>
                    <td className='px-2 py-1 text-right font-medium'>
                      {hasKm(row.km) ? (
                        <span className='px-1'>{row.amount}</span>
                      ) : (
                        <input
                          type='number'
                          min='0'
                          step='any'
                          value={row.amount}
                          onChange={e =>
                            updateCell(index, 'amount', e.target.value)
                          }
                          placeholder='Amount'
                          className={`${inputClass} text-right`}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className='border-t border-slate-300 bg-slate-50 font-semibold'>
                  <td className='px-2 py-2' colSpan={4}>
                    Total
                  </td>
                  <td className='px-2 py-2 text-right'>{totals.km}</td>
                  <td className='px-2 py-2 text-right'>{totals.amount}</td>
                </tr>
              </tfoot>
            </table>
          )}

          {!loading && rows.length === 0 && !error && (
            <p className='text-sm text-slate-500'>
              No conveyance entries found for this month.
            </p>
          )}
        </div>

        <div className='flex justify-end gap-2 border-t border-slate-200 px-5 py-3'>
          <button
            onClick={onClose}
            className='rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50'
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || loading}
            className='rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50'
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}

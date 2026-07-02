import { useState } from 'react'

function formatDate (dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function parseDevice (userAgent = '') {
  if (/android/i.test(userAgent)) return 'Android'
  if (/iphone|ipad/i.test(userAgent)) return 'iOS'
  if (/windows/i.test(userAgent)) return 'Windows'
  if (/mac/i.test(userAgent)) return 'Mac'
  return 'Unknown'
}

function ClickTable ({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className='bg-white border border-gray-200 rounded-xl px-6 py-16 text-center'>
        <p className='text-gray-400'>No clicks recorded yet.</p>
      </div>
    )
  }

  return (
    <div className='bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-50 border-b border-gray-200'>
              <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                Time
              </th>
              <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                Page
              </th>
              <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                IP Address
              </th>
              <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                Device
              </th>
              <th className='text-xs font-semibold text-gray-500 uppercase tracking-wide px-6 py-4'>
                Referrer
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {data.map(click => (
              <tr key={click._id} className='hover:bg-gray-50 transition'>
                <td className='px-6 py-4 text-sm text-gray-600 whitespace-nowrap'>
                  {formatDate(click.clickedAt)}
                </td>
                <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
                  {click.page}
                </td>
                <td className='px-6 py-4 text-sm text-gray-600 whitespace-nowrap font-mono'>
                  {click.ip}
                </td>
                <td className='px-6 py-4 text-sm text-gray-600 whitespace-nowrap'>
                  {parseDevice(click.userAgent)}
                </td>
                <td className='px-6 py-4 text-sm text-gray-500 max-w-xs truncate'>
                  {click.referrer || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ClickAnalytics ({
  callClicks = [],
  whatsappClicks = []
}) {
  const [activeTab, setActiveTab] = useState('call')

  const tabs = [
    {
      id: 'call',
      label: 'Call Clicks',
      count: callClicks.length,
      data: callClicks
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp Clicks',
      count: whatsappClicks.length,
      data: whatsappClicks
    }
  ]

  const activeData = tabs.find(t => t.id === activeTab)?.data || []

  return (
    <div>
      <div className='flex gap-2 mb-6 border-b border-gray-200'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition ${
              activeTab === tab.id
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <ClickTable data={activeData} />
    </div>
  )
}

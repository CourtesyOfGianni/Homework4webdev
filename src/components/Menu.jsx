import { useState, useEffect } from 'react'
import MenuCard from './MenuCard'

const tabs = [
  { key: 'japanese', label: '🍣 Japanese' },
  { key: 'guyanese', label: '🍛 Guyanese' },
  { key: 'fusion',   label: '🌏 Asian / Indian' },
  { key: 'spanish',  label: '🥘 Spanish' },
]

export default function Menu({ onAdd }) {
  const [activeTab, setActiveTab]   = useState('japanese')
  const [menuData,  setMenuData]    = useState({})
  const [loading,   setLoading]     = useState(true)
  const [error,     setError]       = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch menu')
        return r.json()
      })
      .then(items => {
        // Group items by category
        const grouped = items.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = []
          acc[item.category].push(item)
          return acc
        }, {})
        setMenuData(grouped)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="menu" className="py-5" style={{ background: 'var(--light)' }}>
      <div className="container">
        <p className="section-label mb-1">What we serve</p>
        <h2 className="section-title mb-4">Our <span>Menu</span></h2>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`tab-pill ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {loading && <p style={{ color: '#999' }}>Loading menu...</p>}
        {error   && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && (
          <div className="row g-3">
            {(menuData[activeTab] || []).map(item => (
              <div key={item._id} className="col-12 col-sm-6 col-lg-4">
                <MenuCard item={item} cuisine={activeTab} onAdd={onAdd} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

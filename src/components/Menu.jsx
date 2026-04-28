import { useState } from 'react'
import { menuData, tabs } from '../data'
import MenuCard from './MenuCard'

export default function Menu({ onAdd }) {
  const [activeTab, setActiveTab] = useState('japanese')

  return (
    <section id="menu" className="py-5" style={{ background: 'var(--light)' }}>
      <div className="container">
        <p className="section-label mb-1">What we serve</p>
        <h2 className="section-title mb-4">Our <span>Menu</span></h2>

        {/* Tabs */}
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

        {/* Cards */}
        <div className="row g-3">
          {menuData[activeTab].map(item => (
            <div key={item.name} className="col-12 col-sm-6 col-lg-4">
              <MenuCard item={item} cuisine={activeTab} onAdd={onAdd} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

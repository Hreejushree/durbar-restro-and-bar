import { useState, useEffect } from 'react'
import './Menu.css'

import { menuData } from '../data/menuItems'

const badgeMap = {
  veg: { label: '🌿 Veg', cls: 'badge-veg' },
  popular: { label: '🔥 Popular', cls: 'badge-popular' },
  special: { label: '⭐ Special', cls: 'badge-special' },
}

export default function Menu() {
  const tabs = Object.keys(menuData)
  const [activeTab, setActiveTab] = useState(tabs[0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>

      <section className="page-hero" style={{ backgroundImage: "url('/src/assets/group.jpg')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag">Culinary Delights</span>
          <h1 className="section-title">Our Menu</h1>
          <p className="breadcrumb"><a href="/">Home</a> / Menu</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Explore</span>
            <h2 className="section-title">What's on the Table</h2>
            <div className="divider"><span>✦</span></div>
            <p className="section-subtitle">Carefully crafted with quality ingredients and served with care. Something for every palate.</p>
          </div>

          <div className="menu-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >{tab}</button>
            ))}
          </div>

          <div className="menu-grid">
            {menuData[activeTab].map(item => (
              <div className="menu-card" key={item.name}>
                <div className="menu-card-body">
                  <div className="menu-card-header">
                    <span className="menu-card-name">{item.name}</span>
                    <span className="menu-card-price">{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.desc}</p>
                  <span className={`menu-badge ${badgeMap[item.badge].cls}`}>{badgeMap[item.badge].label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="drinks-feature">
        <div className="container">
          <div className="drinks-grid">
            <div className="drinks-info">
              <span className="section-tag">Our Bar</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Premium Drinks &amp; Bar</h2>
              <div className="divider" style={{ justifyContent: 'flex-start', marginLeft: 0 }}><span>✦</span></div>
              <p style={{ color: 'var(--light-muted)', lineHeight: 1.9, marginBottom: '24px' }}>From handcrafted cocktails and fine spirits to refreshing mocktails and local brews — our bar is stocked for every taste and occasion. Whether you're celebrating or simply unwinding, we have the perfect pour for you.</p>
              <div className="drinks-highlights">
                {['🍹 Signature Cocktails', '🥤 Fresh Mocktails', '🍺 Local & Craft Beers', '🥃 Premium Spirits'].map(d => (
                  <div className="drink-highlight" key={d}>{d}</div>
                ))}
              </div>
            </div>
            <div className="drinks-img-wrap">
              <img src="/src/assets/bartender.jpeg" alt="Drinks & Bar" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

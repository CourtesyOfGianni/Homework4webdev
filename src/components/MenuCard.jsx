import { useState } from 'react'

export default function MenuCard({ item, cuisine, onAdd }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd(item.name, item.price)
    setAdded(true)
    setTimeout(() => setAdded(false), 900)
  }

  return (
    <div className={`menu-card p-3 h-100 ${cuisine}`}>
      <p className="card-cuisine mb-1">{cuisine}</p>
      <h5 className="card-name mb-1">{item.name}</h5>
      <p className="card-desc mb-2">{item.desc}</p>
      <p className="card-price mb-2">${item.price.toFixed(2)}</p>
      <button className={`add-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
        {added ? '✓ Added!' : '+ Add to Cart'}
      </button>
    </div>
  )
}

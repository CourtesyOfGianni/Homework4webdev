import { useState } from 'react'

export default function CartDrawer({ cart, open, onClose, onChangeQty, onRemove, onClear }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const [ordering,  setOrdering]  = useState(false)
  const [orderDone, setOrderDone] = useState(false)
  const [orderErr,  setOrderErr]  = useState(null)

  const handleCheckout = async () => {
    setOrdering(true)
    setOrderErr(null)
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, total })
      })
      if (!res.ok) throw new Error('Order failed')
      setOrderDone(true)
      onClear()
      setTimeout(() => { setOrderDone(false); onClose() }, 2500)
    } catch (err) {
      setOrderErr(err.message)
    } finally {
      setOrdering(false)
    }
  }

  return (
    <>
      <div className={`cart-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-head">
          <h5>Your Cart</h5>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          {orderDone && (
            <p style={{ color: 'var(--teal)', textAlign: 'center', marginTop: 40, lineHeight: 1.8 }}>
              ✓ Order placed!<br />ありがとうございます！
            </p>
          )}

          {!orderDone && cart.length === 0 && (
            <p className="cart-empty">Your cart is empty.<br />Add items from the menu!</p>
          )}

          {!orderDone && cart.map(item => (
            <div key={item.name} className="cart-item-row">
              <div style={{ flex: 1 }}>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">${(item.price * item.qty).toFixed(2)}</div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="qty-btn" onClick={() => onChangeQty(item.name, -1)}>−</button>
                <span style={{ minWidth: 20, textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>{item.qty}</span>
                <button className="qty-btn" onClick={() => onChangeQty(item.name, 1)}>+</button>
              </div>
              <button className="rm-btn" onClick={() => onRemove(item.name)}>✕</button>
            </div>
          ))}
        </div>

        {!orderDone && cart.length > 0 && (
          <div className="cart-foot">
            <div className="cart-total-row">
              Total: <span>${total.toFixed(2)}</span>
            </div>
            {orderErr && <p style={{ color: 'red', fontSize: '0.85rem', marginBottom: 8 }}>{orderErr}</p>}
            <button className="clear-btn" onClick={onClear}>Clear Cart</button>
            <button className="checkout-btn" onClick={handleCheckout} disabled={ordering}>
              {ordering ? 'Placing Order...' : 'Checkout'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default function CartDrawer({ cart, open, onClose, onChangeQty, onRemove, onClear }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      <div className={`cart-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${open ? 'open' : ''}`}>
        <div className="cart-head">
          <h5>Your Cart</h5>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0
            ? <p className="cart-empty">Your cart is empty.<br />Add items from the menu!</p>
            : cart.map(item => (
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
                  <button className="rm-btn" onClick={() => onRemove(item.name)} title="Remove">✕</button>
                </div>
              ))
          }
        </div>

        {cart.length > 0 && (
          <div className="cart-foot">
            <div className="cart-total-row">
              Total: <span>${total.toFixed(2)}</span>
            </div>
            <button className="clear-btn" onClick={onClear}>Clear Cart</button>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </>
  )
}

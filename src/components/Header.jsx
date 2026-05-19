export default function Header({ cart, onCartOpen, navOpen, setNavOpen }) {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <header className="site-header">
      <nav className="navbar navbar-dark px-3 px-md-4" style={{ minHeight: 64 }}>
        <div className="d-flex flex-column" style={{ lineHeight: 1.1 }}>
          <span className="logo-jp">くちさびしい</span>
          <span className="logo-en">Kuchisabishii</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar-toggler border-0 d-md-none"
          onClick={() => setNavOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Desktop nav */}
        <div className="d-none d-md-flex align-items-center gap-4 ms-auto">
          {['home','menu','about','gallery','contact'].map(s => (
            <a key={s} href={`#${s}`} className="nav-link" style={{ textTransform: 'uppercase', fontSize: '0.82rem', letterSpacing: 1 }}>
              {s}
            </a>
          ))}
          <button className="cart-btn ms-2" onClick={onCartOpen} aria-label="Open cart">
            <i className="bi bi-bag" />
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </button>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      {navOpen && (
        <div className="d-md-none" style={{ background: '#1e1a16', borderTop: '1px solid #2a2520' }}>
          {['home','menu','about','gallery','contact'].map(s => (
            <a
              key={s} href={`#${s}`} className="nav-link d-block py-3 px-4"
              style={{ borderBottom: '1px solid #2a2520', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: 1 }}
              onClick={() => setNavOpen(false)}
            >
              {s}
            </a>
          ))}
          <div className="px-4 py-3">
            <button className="cart-btn" onClick={() => { onCartOpen(); setNavOpen(false); }}>
              <i className="bi bi-bag" /> Cart
              {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

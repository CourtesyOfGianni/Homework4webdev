import { useState } from 'react'
import Header     from './components/Header'
import Hero       from './components/Hero'
import Menu       from './components/Menu'
import About      from './components/About'
import Gallery    from './components/Gallery'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import CartDrawer from './components/CartDrawer'

export default function App() {
  const [cart, setCart]         = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [navOpen, setNavOpen]   = useState(false)

  const addToCart = (name, price) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === name)
      if (existing) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { name, price, qty: 1 }]
    })
  }

  const changeQty = (name, delta) => {
    setCart(prev =>
      prev.map(i => i.name === name ? { ...i, qty: i.qty + delta } : i)
          .filter(i => i.qty > 0)
    )
  }

  const removeItem = (name) => setCart(prev => prev.filter(i => i.name !== name))
  const clearCart  = ()     => setCart([])

  return (
    <>
      <Header
        cart={cart}
        onCartOpen={() => setCartOpen(true)}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <Hero />
      <Menu onAdd={addToCart} />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <CartDrawer
        cart={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeItem}
        onClear={clearCart}
      />
    </>
  )
}

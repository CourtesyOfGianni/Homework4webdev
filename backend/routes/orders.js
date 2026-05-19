const router = require('express').Router()
const Order = require('../models/Order')

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST place a new order
router.post('/', async (req, res) => {
  try {
    const { items, total } = req.body
    if (!items || items.length === 0) return res.status(400).json({ error: 'Cart is empty' })
    const order = new Order({ items, total })
    const saved = await order.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE an order
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Order not found' })
    res.json({ message: 'Order deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router

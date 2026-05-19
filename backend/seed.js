const mongoose = require('mongoose')
require('dotenv').config()
const MenuItem = require('./models/MenuItem')

const menuItems = [
  // Japanese
  { name: 'Tonkotsu Ramen',      desc: 'Rich pork bone broth, chashu, soft egg, nori, bamboo shoots.',             price: 16.99, category: 'japanese' },
  { name: 'Salmon Sashimi',      desc: 'Fresh Atlantic salmon, soy, wasabi, pickled ginger.',                       price: 18.99, category: 'japanese' },
  { name: 'Chicken Katsu Curry', desc: 'Crispy panko chicken, Japanese golden curry, steamed rice.',                price: 15.99, category: 'japanese' },
  { name: 'Gyoza (6 pcs)',       desc: 'Pan-fried pork & cabbage dumplings, ponzu dipping sauce.',                  price: 9.99,  category: 'japanese' },
  { name: 'Matcha Tiramisu',     desc: 'House-made matcha cream, ladyfingers, dusted cocoa.',                       price: 8.99,  category: 'japanese' },
  // Guyanese
  { name: 'Pepperpot',           desc: 'Slow-cooked beef in cassareep, cinnamon & wiri wiri pepper. Fresh bread.',  price: 19.99, category: 'guyanese' },
  { name: 'Cook-Up Rice',        desc: 'One-pot coconut rice with black-eye peas, salted fish, and herbs.',         price: 13.99, category: 'guyanese' },
  { name: 'Metemgee',            desc: 'Ground provisions in coconut milk with smoked fish and dumplings.',         price: 14.99, category: 'guyanese' },
  { name: 'Dhal & Rice',         desc: 'Split pea dhal tempered with cumin and garlic, white rice, achar.',        price: 11.99, category: 'guyanese' },
  { name: 'Fried Bake & Saltfish', desc: 'Fluffy fried dough, seasoned salted codfish with tomatoes & onions.',    price: 12.99, category: 'guyanese' },
  // Fusion
  { name: 'Butter Chicken',      desc: 'Tender chicken in a velvety tomato-cream masala, garlic naan.',             price: 17.99, category: 'fusion' },
  { name: 'Lamb Biryani',        desc: 'Fragrant basmati, slow-braised lamb, saffron, fried onions, raita.',       price: 20.99, category: 'fusion' },
  { name: 'Pad Thai',            desc: 'Rice noodles, shrimp, egg, bean sprouts, tamarind, crushed peanuts.',      price: 15.99, category: 'fusion' },
  { name: 'Korean BBQ Beef Bowl', desc: 'Bulgogi-marinated short rib, sesame rice, kimchi, scallions.',            price: 18.99, category: 'fusion' },
  { name: 'Beef Tenderloin',     desc: 'Pan-seared, red wine reduction, truffle mash, seasonal vegetables.',        price: 34.99, category: 'fusion' },
  // Spanish
  { name: 'Paella de Mariscos',  desc: 'Saffron rice, shrimp, mussels, clams, calamari, piquillo peppers.',        price: 26.99, category: 'spanish' },
  { name: 'Patatas Bravas',      desc: 'Crispy potatoes, spicy tomato aioli, smoked paprika.',                      price: 9.99,  category: 'spanish' },
  { name: 'Tostones con Camarones', desc: 'Crispy smashed plantains topped with seasoned shrimp in tomato-garlic sauce.', price: 13.99, category: 'spanish' },
  { name: 'Churros con Chocolate', desc: 'Fresh-fried churros in cinnamon sugar, dark chocolate dipping sauce.',   price: 8.99,  category: 'spanish' },
  { name: 'Gazpacho',            desc: 'Chilled tomato soup, cucumber, red pepper, sherry vinegar, olive oil.',    price: 10.99, category: 'spanish' },
]

async function seed() {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('Connected to MongoDB')
  await MenuItem.deleteMany({})
  console.log('Cleared existing menu items')
  await MenuItem.insertMany(menuItems)
  console.log(`Seeded ${menuItems.length} menu items`)
  await mongoose.disconnect()
  console.log('Done!')
}

seed().catch(err => { console.error(err); process.exit(1) })

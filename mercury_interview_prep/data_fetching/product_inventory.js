const inventory = [
  { id: 101, name: 'Laptop', category: 'Electronics', stock: 5, price: 1200 },
  { id: 102, name: 'Mouse', category: 'Electronics', stock: 25, price: 25 },
  { id: 103, name: 'Keyboard', category: 'Electronics', stock: 15, price: 45 },
  { id: 104, name: 'Desk Chair', category: 'Furniture', stock: 2, price: 300 },
]

// find all products that are low in stock (less than 5 units)

const lowInventory = inventory.reduce(
  (acc, product) => {
    const { name, stock } = product
    return product.stock < 5 ? { name, stock } : null
  },
  { name: null, stock: 0 }
)
console.log('LOW INVENTORY', lowInventory)

// group products by category

// calculate total inventory value per category

// sort products by price in descending order

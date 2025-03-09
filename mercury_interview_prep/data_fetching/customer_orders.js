import { orders } from '../orders.js'

// find all order that are delivered
const deliveredOrders = orders.filter((order) => {
  return order.status === 'delivered'
})

// console.log('DELIVERED ORDERS', deliveredOrders)

// sort orders by the most recent order date
const sortedOrders = [...orders].sort(
  (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
)

// console.log('SORTED ORDERS', sortedOrders)

// extract customer names and their total purchase amounts
const customerTotals = orders.map((order) => {
  return {
    customer: order.customer.name,
    totalSpend: order.totalAmount,
  }
})

// console.log(customerTotals)

// calculate total revenue per product category
const categoryRevenue = orders.reduce((acc, order) => {
  order.items.map(({ category, price, quantity }) => {
    acc[category] = (acc[category] || 0) + price * quantity
  })
  return acc
}, {})

// console.log(categoryRevenue)

// get the top spender
const totalSpending = orders.reduce((acc, order) => {
  const { id, name } = order.customer
  acc[id] = acc[id] || 0 + order.totalAmount
  return acc
}, {})

const highestSpender = Object.entries(totalSpending)
  .map(([customerId, totalSpent]) => ({
    customerId,
    totalSpent,
    name: orders.find((order) => order.customer.id == customerId).customer.name,
  }))
  .sort((a, b) => b.totalSpent - a.totalSpent)[0]

// console.log(highestSpender)

// Find most frequently purchased product
const productFrequency = orders.reduce((acc, order) => {
  order.items.forEach(({ productId, name, quantity }) => {
    if (!acc[productId]) {
      acc[productId] = { name, quantity: 0 }
    }
    acc[productId].quantity += quantity
  })
  return acc
}, {})

const mostFrequentPurchase = Object.values(productFrequency).sort((a, b) => {
  return b.quantity - a.quantity
})[0]
// console.log(mostFrequentPurchase)

// Find customers with multiple pending orders
const pendingOrders = orders
  .filter((order) => order.status === 'pending')
  .reduce((acc, order) => {
    acc[order.customer.id] = (acc[order.customer.id] || 0) + 1
    return acc
  }, {})

const customersWithMultiplePending = Object.entries(pendingOrders)
  .filter(([_, count]) => count > 1)
  .map(([customer]) => customer.id)

console.log(pendingOrders)
console.log(customersWithMultiplePending)

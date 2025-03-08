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

console.log(categoryRevenue)

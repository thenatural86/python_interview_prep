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

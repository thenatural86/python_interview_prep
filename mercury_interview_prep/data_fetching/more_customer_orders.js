import { data } from '../data.js'

// find pending orders
const pendingOrders = data.filter((order) => {
  return order.status === 'pending'
})
// console.log(pendingOrders)

// get the total revenue for all completed orders (shipped, delivered)

const completedOrdersRevenue = data
  .filter((order) => order.status !== 'pending')
  .reduce((acc, order) => acc + order.totalAmount, 0)

console.log(completedOrdersRevenue)

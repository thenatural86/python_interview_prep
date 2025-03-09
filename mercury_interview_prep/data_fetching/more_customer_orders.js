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

// console.log(completedOrdersRevenue)

//count the number of times each product was purchased
const timesItemPurchased = data.reduce((acc, order) => {
  order.items.forEach(({ productId, quantity, name }) => {
    if (!acc[productId]) {
      acc[productId] = { name, quantity: 0 }
    }
    acc[productId].quantity += quantity
  })
  return acc
}, {})
console.log(timesItemPurchased)

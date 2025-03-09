import { data } from '../data.js'

// find pending orders
const pendingOrders = data.filter((order) => {
  return order.status === 'pending'
})
console.log(pendingOrders)

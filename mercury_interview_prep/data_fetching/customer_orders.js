import { orders } from '../orders.js'

// find all order that are delivered
const deliveredOrders = orders.filter((order) => {
  return order.status === 'delivered'
})

console.log(deliveredOrders)

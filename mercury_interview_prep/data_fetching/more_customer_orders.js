import { data } from '../data.js'

// 1️⃣ Find all orders that are still pending
const pendingOrders = data.filter((order) => {
  return order.status === 'pending'
})
// console.log(pendingOrders)

// 2️⃣ Get the total revenue from all completed orders (shipped + delivered)

const completedOrdersRevenue = data
  .filter((order) => order.status !== 'pending')
  .reduce((acc, order) => acc + order.totalAmount, 0)

// console.log(completedOrdersRevenue)

// 3️⃣ Count the number of times each product was purchased
const timesItemPurchased = data.reduce((acc, order) => {
  order.items.forEach(({ productId, quantity, name }) => {
    if (!acc[productId]) {
      acc[productId] = { name, quantity: 0 }
    }
    acc[productId].quantity += quantity
  })
  return acc
}, {})
// console.log(timesItemPurchased)

// 4️⃣ Find the top customer by total spending
const topSpender = data.reduce((acc, order) => {
  const { customer, totalAmount } = order
  const { id, name } = customer
  if (!acc[id]) {
    acc[id] = { name, totalSpent: 0 }
  }
  acc[id].totalSpent += totalAmount
  return acc
}, {})

const highestSpender = Object.values(topSpender).sort(
  (a, b) => b.totalSpent - a.totalSpent
)[0]

console.log('TOP SPENDER', topSpender)
console.log('HIGHEST SPENDER', highestSpender)

// 5️⃣ Compute the average order value per customer
const avgOrderValue = data.reduce((acc, order) => {
  const { id } = order.customer
  if (!acc[id]) {
    acc[id] = { totalSpent: 0, orderCount: 0 }
  }
  acc[id].totalSpent += order.totalAmount
  acc[id].orderCount += 1
  return acc
}, {})

const resultAvgOrderValue = Object.entries(avgOrderValue).map(
  ([id, { totalSpent, orderCount }]) => ({
    id,
    avgOrderValue: totalSpent / orderCount,
  })
)

console.log('AVERAGE ORDER VALUE', resultAvgOrderValue)

// 6️⃣ Identify customers who have placed more than one order
const multipleOrders = data.reduce((acc, order) => {
  const { id, name } = order.customer
  if (!acc[id]) {
    acc[id] = { name, orderCount: 0 }
  }
  acc[id].orderCount += 1
  return acc
}, {})

const resultMultipleOrders = Object.values(multipleOrders).filter(
  (customer) => customer.orderCount > 1
)
console.log('MULTIPLE ORDERS', resultMultipleOrders)

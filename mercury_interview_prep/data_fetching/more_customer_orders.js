import { data } from '../data.js'

// 👶 Junior Software Engineer (SE1) Questions
// 1️⃣ Find all orders that are still pending
const pendingOrders = data.filter((order) => {
  return order.status === 'pending'
})
console.log('PENDING ORDERS', pendingOrders)

// 2️⃣ Get the total revenue from all completed orders (shipped + delivered)

const completedOrdersRevenue = data
  .filter((order) => order.status !== 'pending')
  .reduce((acc, order) => acc + order.totalAmount, 0)

console.log('COMPLETED ORDERS REVENUE', completedOrdersRevenue)

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
console.log('TIMES ITEM PURCHASED', timesItemPurchased)

// 👨‍💻 Software Engineer (SE2) Questions
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

// console.log('TOP SPENDER', topSpender)
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

// 🚀 Senior Software Engineer (SE3) Questions
// 7️⃣ Find the most frequently purchased product
const mostFrequentProduct = Object.values(timesItemPurchased).sort(
  (a, b) => b.quantity - a.quantity
)[0]
console.log('MOST FREQUENT PRODUCT', mostFrequentProduct)

// 8️⃣ Calculate the monthly revenue trend (total revenue per month)
const revenueByMonth = data.reduce((acc, order) => {
  const month = order.orderDate.slice(0, 7) // Extract YYYY-MM
  acc[month] = (acc[month] || 0) + order.totalAmount
  return acc
}, {})

console.log('REVENUE BY MONTH', revenueByMonth)

// 9️⃣ Find customers who have pending orders
const customersWithPending = [
  ...new Set(
    data
      .filter((order) => order.status === 'pending')
      .map((order) => order.customer.name)
  ),
]
console.log('CUSTOMERS WITH PENDING ORDERS', customersWithPending)

// 🔟 Predict next month’s revenue using a simple moving average of the last 3 months
const revenueArray = Object.values(revenueByMonth)
const movingAverage =
  revenueArray.slice(-3).reduce((acc, val) => acc + val, 0) / 3
console.log(`Predicted Revenue for Next Month: $${movingAverage.toFixed(2)}`)

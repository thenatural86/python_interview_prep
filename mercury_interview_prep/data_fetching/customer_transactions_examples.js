const data = [
  { id: 1, customer: 'Alice', amount: 50, date: '2025-02-01' },
  { id: 2, customer: 'Bob', amount: 20, date: '2025-02-02' },
  { id: 3, customer: 'Alice', amount: 30, date: '2025-02-03' },
  { id: 4, customer: 'Alice', amount: 100, date: '2025-02-05' },
  { id: 5, customer: 'Bob', amount: 60, date: '2025-02-06' },
]

// how can I compute a customers total transactions
const aggregatedData = data.reduce((acc, transactions) => {
  const { customer, amount } = transactions
  acc[customer] = (acc[customer] || 0) + amount
  return acc
}, {})
console.log(aggregatedData)

// array.reduce((accumulator, currentValue, index, array) => {
//   // Process the current value and update the accumulator
//   return updatedAccumulator
// }, initialValue)

// filter transactions under $50
const filterTransactions = data.filter((transaction) => {
  const filteredTransactions = transaction.amount > 50
  return filteredTransactions
})

console.log(filterTransactions)

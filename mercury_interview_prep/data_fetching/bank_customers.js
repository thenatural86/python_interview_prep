import { bankData } from '../banking_data.js'

// Junior-Level Insights (Basic Array Methods)
// 1️⃣ Find all users with checking accounts below $500.

const lowBalanceUsers = bankData
  .filter((user) =>
    user.accounts.some((acc) => acc.type === 'checking' && acc.balance < 500)
  )
  //   An array of users who have a checking account below $500.
  //   transforms the filtered user data.
  .map((user) => ({
    // user.name → Extracts the user's name.
    name: user.name,
    // returns the first checking account the user has.
    balance: user.accounts.find((acc) => acc.type === 'checking').balance,
  }))

console.log(lowBalanceUsers)

// 2️⃣ Get total money held in all savings accounts.

//  Iterate Over All Users | Accumulate total savings from all users
const totalSavings = bankData.reduce((acc, user) => {
  return (
    acc +
    // Inner .reduce() – Sum Up Savings Balances Per User
    // .reduce() is used on each user's accounts array to sum up only their savings balances.
    user.accounts.reduce(
      // sum (accumulator for this reduce) starts at 0 and accumulates the total savings balance for the user.
      // If the account is a "savings" account → Add its balance to sum. | Otherwise, keep sum unchanged.
      // Goal → Get total savings balance for one user.
      (sum, acc) => (acc.type === 'savings' ? sum + acc.balance : sum),
      0
    )
  )
}, 0)

console.log(totalSavings)

// 3️⃣ Find all transactions greater than $100.

const largeTransactions = bankData.flatMap((user) =>
  user.transactions.filter((txn) => Math.abs(txn.amount) > 100)
)

console.log(largeTransactions)

// 4️⃣ Find all users who have loans.

const usersWithLoans = bankData
  .filter((user) => user.loans.length > 0)
  .map((user) => user.name)

console.log(usersWithLoans)

//  Mid-Level Insights (Software Engineer 2)
// 5️⃣ Calculate total monthly loan payments across all users.

const totalMonthlyPayments = bankData.reduce((total, user) => {
  return total + user.loans.reduce((sum, loan) => sum + loan.monthlyPayment, 0)
}, 0)

console.log(totalMonthlyPayments)

// 6️⃣ Find users who have withdrawn money in the past week.

const oneWeekAgo = new Date()
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

const recentWithdrawals = bankData
  .filter((user) =>
    user.transactions.some(
      (txn) =>
        txn.type === 'withdrawal' && new Date(txn.timestamp) >= oneWeekAgo
    )
  )
  .map((user) => user.name)

console.log(recentWithdrawals)

// 7️⃣ Find the user with the highest loan balance.

const highestLoanUser = bankData
  .map((user) => ({
    name: user.name,
    totalLoan: user.loans.reduce((sum, loan) => sum + loan.amount, 0),
  }))
  .sort((a, b) => b.totalLoan - a.totalLoan)[0]

console.log(highestLoanUser)

// Advanced Insights (Software Engineer 3)

// 8️⃣ Compute the average transaction amount per user (excluding deposits).

const avgTransactionPerUser = bankData.map((user) => {
  const transactions = user.transactions.filter((txn) => txn.type !== 'deposit')
  const avgAmount = transactions.length
    ? transactions.reduce((sum, txn) => sum + Math.abs(txn.amount), 0) /
      transactions.length
    : 0
  return { name: user.name, avgTransaction: avgAmount.toFixed(2) }
})

console.log(avgTransactionPerUser)

// 9️⃣ Find the most active user (who made the most transactions).

const mostActiveUser = bankData
  .map((user) => ({ name: user.name, txnCount: user.transactions.length }))
  .sort((a, b) => b.txnCount - a.txnCount)[0]

console.log(mostActiveUser)

// 🔟 Identify fraud: Find users who made multiple transactions within 1 minute.

const fraudUsers = bankData
  .filter((user) =>
    user.transactions.some((txn, index, arr) => {
      if (index === 0) return false
      const prevTxn = arr[index - 1]
      return (
        txn.accountId === prevTxn.accountId &&
        (new Date(txn.timestamp) - new Date(prevTxn.timestamp)) / 1000 < 60
      )
    })
  )
  .map((user) => user.name)

console.log(fraudUsers)

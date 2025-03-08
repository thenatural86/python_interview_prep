const users = [
  {
    user: 'alice@example.com',
    status: 'success',
    timestamp: '2025-03-01T10:00:00Z',
  },
  {
    user: 'bob@example.com',
    status: 'failed',
    timestamp: '2025-03-01T10:05:00Z',
  },
  {
    user: 'alice@example.com',
    status: 'failed',
    timestamp: '2025-03-01T10:10:00Z',
  },
  {
    user: 'alice@example.com',
    status: 'success',
    timestamp: '2025-03-01T10:15:00Z',
  },
  {
    user: 'bob@example.com',
    status: 'success',
    timestamp: '2025-03-01T10:20:00Z',
  },
]

// Count the number of failed login attempts per user.
const failedLogin = users.reduce((acc, person) => {
  const { user, status } = person

  // initialize user count if it doesn't exist
  if (!acc[user]) {
    acc[user] = 0
  }

  if (status === 'failed') {
    acc[user] += 1
  }
  return acc
}, {})

// console.log(failedLogin)

// Find the most recent login attempt per user (by timestamp).
const mostRecentLoginAttempt = users.reduce((acc, person) => {
  const { user, timestamp } = person

  //   if the user does not exist OR new timestamp is more recent replace the existing entry
  if (!acc[user] || new Date(timestamp) > new Date(acc[user].timestamp)) {
    acc[user] = { user, timestamp }
    return acc
  }
}, {})

console.log(mostRecentLoginAttempt)

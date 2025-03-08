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

console.log(failedLogin)
// Identify users who had consecutive failed attempts before a successful login.

// Find the most recent login attempt per user (by timestamp).

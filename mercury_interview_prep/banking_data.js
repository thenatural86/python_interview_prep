export const bankData = [
  {
    userId: 1,
    name: 'Alice Johnson',
    accounts: [
      { type: 'checking', balance: 2500, accountId: 'CHK123' },
      { type: 'savings', balance: 10000, accountId: 'SAV456' },
    ],
    transactions: [
      {
        txnId: 'TXN1',
        accountId: 'CHK123',
        amount: -200,
        type: 'withdrawal',
        timestamp: '2024-02-01T10:00:00Z',
      },
      {
        txnId: 'TXN2',
        accountId: 'CHK123',
        amount: 500,
        type: 'deposit',
        timestamp: '2024-02-02T12:00:00Z',
      },
      {
        txnId: 'TXN3',
        accountId: 'SAV456',
        amount: -1000,
        type: 'transfer',
        timestamp: '2024-02-03T15:30:00Z',
      },
    ],
    loans: [
      { loanId: 'L001', amount: 5000, status: 'active', monthlyPayment: 150 },
    ],
  },
  {
    userId: 2,
    name: 'Bob Smith',
    accounts: [{ type: 'checking', balance: 1500, accountId: 'CHK789' }],
    transactions: [
      {
        txnId: 'TXN4',
        accountId: 'CHK789',
        amount: -50,
        type: 'purchase',
        timestamp: '2024-02-04T11:20:00Z',
      },
      {
        txnId: 'TXN5',
        accountId: 'CHK789',
        amount: -200,
        type: 'withdrawal',
        timestamp: '2024-02-05T09:45:00Z',
      },
    ],
    loans: [],
  },
  {
    userId: 3,
    name: 'Charlie Davis',
    accounts: [
      { type: 'checking', balance: 800, accountId: 'CHK567' },
      { type: 'savings', balance: 12000, accountId: 'SAV890' },
    ],
    transactions: [
      {
        txnId: 'TXN6',
        accountId: 'CHK567',
        amount: -400,
        type: 'purchase',
        timestamp: '2024-02-06T14:15:00Z',
      },
      {
        txnId: 'TXN7',
        accountId: 'SAV890',
        amount: 2000,
        type: 'deposit',
        timestamp: '2024-02-07T17:05:00Z',
      },
    ],
    loans: [
      { loanId: 'L002', amount: 10000, status: 'active', monthlyPayment: 300 },
    ],
  },
  {
    userId: 4,
    name: 'David Lee',
    accounts: [{ type: 'checking', balance: 6000, accountId: 'CHK321' }],
    transactions: [
      {
        txnId: 'TXN8',
        accountId: 'CHK321',
        amount: -500,
        type: 'purchase',
        timestamp: '2024-02-08T19:30:00Z',
      },
    ],
    loans: [
      { loanId: 'L003', amount: 20000, status: 'active', monthlyPayment: 500 },
    ],
  },
  {
    userId: 5,
    name: 'Emma Wilson',
    accounts: [{ type: 'checking', balance: 200, accountId: 'CHK654' }],
    transactions: [],
    loans: [],
  },
]

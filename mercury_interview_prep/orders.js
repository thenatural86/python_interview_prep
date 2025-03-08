export const orders = [
  {
    orderId: 1,
    customer: { id: 101, name: 'Alice', email: 'alice@example.com' },
    items: [
      {
        productId: 201,
        name: 'Laptop',
        category: 'Electronics',
        price: 1200,
        quantity: 1,
      },
      {
        productId: 202,
        name: 'Mouse',
        category: 'Electronics',
        price: 25,
        quantity: 2,
      },
    ],
    totalAmount: 1250,
    status: 'delivered',
    orderDate: '2025-02-15T14:30:00Z',
  },
  {
    orderId: 2,
    customer: { id: 102, name: 'Bob', email: 'bob@example.com' },
    items: [
      {
        productId: 203,
        name: 'Desk Chair',
        category: 'Furniture',
        price: 300,
        quantity: 1,
      },
    ],
    totalAmount: 300,
    status: 'shipped',
    orderDate: '2025-02-18T09:00:00Z',
  },
  {
    orderId: 3,
    customer: { id: 101, name: 'Alice', email: 'alice@example.com' },
    items: [
      {
        productId: 201,
        name: 'Laptop',
        category: 'Electronics',
        price: 1200,
        quantity: 1,
      },
      {
        productId: 204,
        name: 'Keyboard',
        category: 'Electronics',
        price: 45,
        quantity: 1,
      },
    ],
    totalAmount: 1245,
    status: 'pending',
    orderDate: '2025-02-20T16:45:00Z',
  },
  {
    orderId: 4,
    customer: { id: 103, name: 'Charlie', email: 'charlie@example.com' },
    items: [
      {
        productId: 205,
        name: 'Bookshelf',
        category: 'Furniture',
        price: 150,
        quantity: 2,
      },
    ],
    totalAmount: 300,
    status: 'delivered',
    orderDate: '2025-02-17T12:15:00Z',
  },
]

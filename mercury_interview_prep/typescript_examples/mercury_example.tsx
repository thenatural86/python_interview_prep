import { useMemo, useState, createContext, useContext, React } from 'react'

// Scenario 1
// Type interface example
interface User {
  firstName: string
  lastName: string
  email: string
  age?: number
}

function UserProfile({ user }: { user: User }) {
  if (!user) return 'No user found'
  const fullName = user.firstName + ' ' + user.lastName

  return (
    <div>
      <h2>{fullName}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age ?? 'N/A'}</p>
    </div>
  )
}

// Scenario 2
// useMemo example - can use useMemo when doing expensive calculations and to avoid re-renders because it caches the result
function ExpensiveComponent({ count }: { count: number }) {
  const computedValue = useMemo(() => {
    console.log('Expensive computation happening...')
    return Array.from({ length: 1000000 }, (_, i) => i).reduce(
      (a, b) => a + b,
      0
    )
  }, []) // Empty dependency array means it runs only once

  return (
    <div>
      <h2>Result: {computedValue}</h2>
      <p>Count: {count}</p>
    </div>
  )
}

// Scenario 3
// use the previous state (precCount) to update state instead of count + 1
//  (prevState => newState)
function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1) // ✅ Correct way to update state
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

// 1️⃣ Create Context
const CountContext = createContext()

function ParentComponent() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <ChildComponent />
    </CountContext.Provider>
  )
}

function ChildComponent() {
  return <GrandChildComponent />
}

// Scenario 4 - Alternative State Management & Props Drilling
// Instead of drilling props, we can use React Context to manage state globally.
// ✅ Removes Props Drilling
// ✅ Minimizes Unnecessary Re-renders

function GrandChildComponent() {
  const { count, setCount } = useContext(CountContext)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  )
}

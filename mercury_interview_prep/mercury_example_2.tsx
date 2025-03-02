import { useState, useEffect, React } from 'react'

// Scenario 1
// Use React.CSSProperties for style typing
// Destructure props for better readability.
// Prefer explicit function typing over React.FC unless children is required.
type ButtonProps = {
  label: string
  onClick: () => void
  style?: React.CSSProperties
}

const Button = ({ label, onClick, style }: ButtonProps) => {
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  )
}

export default function App() {
  return (
    <Button
      label='Click me'
      onClick={() => console.log('Clicked')}
      style={{ color: 'blue', fontSize: '16px' }}
    />
  )
}

// Scenario 2
//  Debouncing delays the API call, reducing the number of re-renders.
//  Clears the timeout before setting a new one, ensuring only the latest query executes.

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query) // Calls search function after a delay
    }, 300) // 300ms debounce

    return () => clearTimeout(handler) // Cleanup on unmount or re-run
  }, [query, onSearch])

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />
}

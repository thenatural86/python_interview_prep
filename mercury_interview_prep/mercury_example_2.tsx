import { React } from 'react'

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

import { useMemo, useState, createContext, useContext, React } from 'react'

// Scenario 1
// Stronger TypeScript types (useState<string>, extracted FormData type)
// Proper validation (required, minLength, trim() checks)
// Correct event typing (React.FormEvent<HTMLFormElement>)
// Better accessibility (labels, aria-label, htmlFor)
type FormData = { email: string; password: string }

type FormProps = { onSubmit: (data: FormData) => void }

const LoginForm = ({ onSubmit }: FormProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      alert('Please fill in both fields')
      return
    }
    onSubmit({ email, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label='Email address'
      />

      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        required
        minLength={6}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        aria-label='Password'
      />

      <button type='submit'>Login</button>
    </form>
  )
}

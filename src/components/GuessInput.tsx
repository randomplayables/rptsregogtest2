import React, { useState, FormEvent } from 'react'

interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled: boolean
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled }) => {
  const [guess, setGuess] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const num = parseInt(guess, 10)
    if (!isNaN(num)) {
      onGuess(num)
      setGuess('')
    }
  }

  return (
    <form className="guess-input" onSubmit={handleSubmit}>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || guess.trim() === ''}>
        Guess
      </button>
    </form>
  )
}

export default GuessInput
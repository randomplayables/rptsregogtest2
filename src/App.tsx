import React from 'react'
import { usePrimeGame } from './hooks/usePrimeGame'
import GuessInput from './components/GuessInput'
import Feedback from './components/Feedback'
import History from './components/History'
import Controls from './components/Controls'

const App: React.FC = () => {
  const { feedback, history, handleGuess, restartGame, isGameOver } = usePrimeGame()

  return (
    <div className="app">
      <h1>Prime Number Guessing Game</h1>
      <Feedback message={feedback} />
      <GuessInput onGuess={handleGuess} disabled={isGameOver} />
      <History history={history} />
      <Controls onRestart={restartGame} />
    </div>
  )
}

export default App
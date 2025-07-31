import React from 'react'

interface HistoryProps {
  history: { guess: number; feedback: string }[]
}

const History: React.FC<HistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return null
  }

  return (
    <ul className="history">
      {history.map((entry, index) => (
        <li key={index}>
          Guess {entry.guess}: {entry.feedback}
        </li>
      ))}
    </ul>
  )
}

export default History
import React from 'react'

interface ControlsProps {
  onRestart: () => void
}

const Controls: React.FC<ControlsProps> = ({ onRestart }) => {
  return (
    <div className="controls">
      <button onClick={onRestart}>Restart Game</button>
    </div>
  )
}

export default Controls
export type FeedbackMessage = 'Too high' | 'Too low' | 'Not a prime number' | 'Correct';

export interface HistoryEntry {
  guess: number;
  feedback: FeedbackMessage;
}

export interface ApiSessionData {
  sessionId: string;
  [key: string]: any;
}

export interface SaveGameDataPayload {
  sessionId: string;
  roundNumber: number;
  roundData: HistoryEntry;
}

export interface UsePrimeGameReturn {
  feedback: FeedbackMessage;
  history: HistoryEntry[];
  handleGuess: (guess: number) => void;
  restartGame: () => void;
  isGameOver: boolean;
}
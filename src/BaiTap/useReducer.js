import React, { useReducer } from 'react';

// ==========================================
// 1. Simple Counter Component
// ==========================================
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    case 'RESET': return { count: 0 };
    default: return state;
  }
};

export function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

// ==========================================
// 2. Question Bank Component
// ==========================================
const initialQuizState = {
  questions: [
    { id: 1, question: 'What is the capital of Australia?', options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'], answer: 'Canberra' },
    { id: 2, question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' }
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };
    case 'NEXT_QUESTION':
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextQ = state.currentQuestion + 1;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        selectedOption: '',
        currentQuestion: nextQ,
        showScore: nextQ >= state.questions.length,
      };
    case 'RESTART_QUIZ':
      return initialQuizState;
    default:
      return state;
  }
};

export function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  if (state.showScore) {
    return (
      <div>
        <h2>Your Score: {state.score}/{state.questions.length}</h2>
        <button onClick={() => dispatch({ type: 'RESTART_QUIZ' })}>Restart Quiz</button>
      </div>
    );
  }

  const question = state.questions[state.currentQuestion];

  return (
    <div>
      <h2>Question {state.currentQuestion + 1}</h2>
      <h3>{question.question}</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {question.options.map((option, idx) => (
          <button 
            key={idx} 
            onClick={() => dispatch({ type: 'SELECT_OPTION', payload: option })}
            style={{ backgroundColor: state.selectedOption === option ? 'lightblue' : 'white' }}
          >
            {option}
          </button>
        ))}
      </div>
      <br/>
      <button 
        disabled={!state.selectedOption} 
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        Next
      </button>
    </div>
  );
}
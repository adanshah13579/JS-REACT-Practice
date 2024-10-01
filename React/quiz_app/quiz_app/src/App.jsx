import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch trivia questions from Open Trivia DB
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
        setQuestions(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trivia questions', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Trivia Quiz</h1>
      {isFinished ? (
        <div className="results">
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="options">
            {[...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer].sort().map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(answer === questions[currentQuestionIndex].correct_answer)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

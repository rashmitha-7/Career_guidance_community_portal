import React, { useState } from "react";

function Quiz() {
  // State to track the current question and score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Career-related quiz questions
  const questions = [
    {
      questionText: "What is considered the most important skill in communication?",
      answerOptions: [
        { answerText: "Speaking", isCorrect: false },
        { answerText: "Listening", isCorrect: true },
        { answerText: "Writing", isCorrect: false },
        { answerText: "Presentation", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is a key factor in choosing a career path?",
      answerOptions: [
        { answerText: "Your strengths and interests", isCorrect: true },
        { answerText: "Peer pressure", isCorrect: false },
        { answerText: "Popular trends", isCorrect: false },
        { answerText: "Parental expectations", isCorrect: false },
      ],
    },
    {
      questionText: "What is the STAR method commonly used for in interviews?",
      answerOptions: [
        { answerText: "Behavioral questions", isCorrect: true },
        { answerText: "Technical questions", isCorrect: false },
        { answerText: "Salary negotiation", isCorrect: false },
        { answerText: "Ice-breaking", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a key benefit of networking?",
      answerOptions: [
        { answerText: "Building industry relationships", isCorrect: true },
        { answerText: "Getting promoted", isCorrect: false },
        { answerText: "Improving technical skills", isCorrect: false },
        { answerText: "Increasing salary", isCorrect: false },
      ],
    },
    {
      questionText: "What does a professional portfolio typically showcase?",
      answerOptions: [
        { answerText: "Work samples and achievements", isCorrect: true },
        { answerText: "Social media profiles", isCorrect: false },
        { answerText: "Personal hobbies", isCorrect: false },
        { answerText: "Travel experiences", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the best strategy for long-term career growth?",
      answerOptions: [
        { answerText: "Continuous learning and development", isCorrect: true },
        { answerText: "Sticking with one job for life", isCorrect: false },
        { answerText: "Switching jobs frequently", isCorrect: false },
        { answerText: "Avoiding challenges", isCorrect: false },
      ],
    },
    {
      questionText: "Which soft skill is essential for teamwork?",
      answerOptions: [
        { answerText: "Collaboration", isCorrect: true },
        { answerText: "Self-reliance", isCorrect: false },
        { answerText: "Independence", isCorrect: false },
        { answerText: "Solitude", isCorrect: false },
      ],
    },
    {
      questionText: "What should you research before a job interview?",
      answerOptions: [
        { answerText: "The company’s history and culture", isCorrect: true },
        { answerText: "The salary of the interviewer", isCorrect: false },
        { answerText: "Your interviewer’s hobbies", isCorrect: false },
        { answerText: "The location of other candidates", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is a key factor in effective time management?",
      answerOptions: [
        { answerText: "Prioritizing tasks", isCorrect: true },
        { answerText: "Working without breaks", isCorrect: false },
        { answerText: "Ignoring deadlines", isCorrect: false },
        { answerText: "Multitasking on everything", isCorrect: false },
      ],
    },
  ];

  // Function to handle answer selection
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container mt-5">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}</h2>
        </div>
      ) : (
        <div>
          <h3 className="mb-4">Career Quiz</h3>
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section mt-3">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                className="btn btn-outline-primary m-2"
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;

import React, { useState } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [careerScores, setCareerScores] = useState({
    Engineering: 0,
    Medical: 0,
    Mathematics: 0,
    Agriculture: 0,
    Sports: 0,
    Government: 0,
  });

  const questions = [
    {
      questionText: "What type of problem do you enjoy solving the most?",
      options: {
        Engineering: "Designing and building machines or structures",
        Medical: "Diagnosing and treating diseases",
        Mathematics: "Solving math puzzles and logical problems",
        Agriculture: "Improving farming techniques and crop production",
        Sports: "Training for physical endurance and competing",
        Government: "Solving social and administrative issues",
      },
    },
    {
      questionText: "What kind of environment do you prefer to work in?",
      options: {
        Engineering: "Labs, offices, or construction sites",
        Medical: "Hospitals and clinics",
        Mathematics: "Research institutions or classrooms",
        Agriculture: "Farms, fields, or agribusiness settings",
        Sports: "Stadiums, sports arenas, or training centers",
        Government: "Government offices or policymaking spaces",
      },
    },
    {
      questionText: "How do you feel about working with people?",
      options: {
        Engineering: "I prefer working with machines, technology, or software",
        Medical: "I enjoy direct interaction with people and helping them",
        Mathematics: "I prefer working independently with numbers and theories",
        Agriculture: "I like working with farmers, animals, and nature",
        Sports: "I enjoy teamwork and competing with others",
        Government: "I like influencing decisions that affect society",
      },
    },
    {
      questionText: "Which subject interests you the most?",
      options: {
        Engineering: "Physics, technology, and design",
        Medical: "Biology and human anatomy",
        Mathematics: "Mathematics and problem-solving",
        Agriculture: "Environmental science and agriculture",
        Sports: "Physical education and sports training",
        Government: "Political science and law",
      },
    },
    {
      questionText: "How much time are you willing to invest in education and training?",
      options: {
        Engineering: "4-5 years of technical study",
        Medical: "7-10 years for medical school and specialization",
        Mathematics: "3-5 years for research and problem-solving",
        Agriculture: "3-4 years for agricultural sciences or practical training",
        Sports: "Years of physical training and competitions",
        Government: "Years of preparation for government exams",
      },
    },
  ];

  const handleAnswer = (career) => {
    setCareerScores((prevScores) => ({
      ...prevScores,
      [career]: prevScores[career] + 1,
    }));

    setAnswers([...answers, career]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getCareerRecommendation = () => {
    return Object.keys(careerScores).reduce((a, b) => (careerScores[a] > careerScores[b] ? a : b));
  };

  return (
    <div className="container mt-5 text-center">
      {showResult ? (
        <div className="result-section">
          <h2>Your recommended career path is: {getCareerRecommendation()}</h2>
        </div>
      ) : (
        <div className="quiz-section">
          <h3 className="mb-4">{questions[currentQuestion].questionText}</h3>
          {Object.entries(questions[currentQuestion].options).map(([career, text], index) => (
            <button
              key={index}
              className="btn btn-outline-primary m-2"
              onClick={() => handleAnswer(career)}
            >
              {text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;

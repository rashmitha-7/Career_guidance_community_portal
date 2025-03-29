import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import mentorsData from "./mentorsData";

console.log("Loaded API Key:", import.meta.env.VITE_GEMINI_API_KEY);

const MentorDetail = () => {
  const { id } = useParams();
  const mentor = mentorsData.find((m) => m.id === parseInt(id));

  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ API Key is missing!");
      alert("API key is missing. Check your .env file.");
      return;
    }

    setLoading(true);

    try {
      console.log("🔄 Sending request to Gemini API...");

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: question }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Response from Gemini API:", response.data);

      const answer =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't fetch an answer.";

      setAnswers((prevAnswers) => [...prevAnswers, { question, answer }]);
      setQuestion("");
    } catch (error) {
      console.error("❌ Error fetching AI response:", error.response?.data || error.message);
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { question, answer: "Sorry, I couldn't fetch an answer." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!mentor) return <h2 className="text-center">Mentor not found</h2>;

  return (
    <div className="container mt-5 text-center">
      <img
        src={mentor.image}
        alt={mentor.name}
        className="rounded-circle"
        style={{ width: "150px", height: "150px", border: "4px solid #007bff" }}
      />
      <h2 className="mt-3">{mentor.name}</h2>
      <h4 className="text-muted">{mentor.title}</h4>
      <p>{mentor.experience}</p>

      <div className="mt-4">
        <h5>Ask a Question</h5>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleAskQuestion}
          disabled={loading}
        >
          {loading ? "Asking..." : "Ask"}
        </button>
      </div>

      {answers.length > 0 && (
        <div className="mt-4">
          <h5>Answers</h5>
          {answers.map((qa, index) => (
            <div key={index} className="border p-3 mt-2">
              <strong>Q:</strong> {qa.question}
              <br />
              <strong>A:</strong> {qa.answer}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentorDetail;

import React, { useState } from "react";
import { CSSQuiz } from "../constant";
import Result from "./Result";

export default function Css() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState(
    Array(CSSQuiz.questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setAnswers((prev) => {
        const updatedAnswers = [...prev];
        updatedAnswers[currentQuestionIndex] = selectedOption;
        return updatedAnswers;
      });

      if (currentQuestionIndex < CSSQuiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        setIsSubmitted(true);
      }
    }
  };

  const handlePreviewQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1]);
    }
  };

  const { question, options } = CSSQuiz.questions[currentQuestionIndex];

  if (isSubmitted) {
    const score = answers.reduce((score, answer, index) => {
      if (answer === CSSQuiz.questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);

    return (
      <Result
        score={score}
        total={CSSQuiz.questions.length}
        answers={answers}
        quiz={CSSQuiz.questions}
      />
    );
  }

  return (
    <div
      className="bg-gray-300 rounded-xl mt-10 mx-auto"
      style={{
        padding: "20px",
        maxWidth: "600px",
        textAlign: "center",
      }}
    >
      <h1 className="font-bold" style={{ fontSize: "24px", marginBottom: "20px" }}>
        {CSSQuiz.title}
      </h1>
      <div style={{ marginBottom: "20px" }}>
        <h2 className="text-left font-bold" style={{ fontSize: "20px" }}>
          Q {question}
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {options.map((option) => (
            <li
              key={option.option}
              style={{
                margin: "10px 0",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className="cursor-pointer"
                type="radio"
                id={option.option}
                name="quiz-option"
                value={option.option}
                checked={selectedOption === option.option}
                onChange={() => setSelectedOption(option.option)}
                style={{ marginRight: "10px" }}
              />
              <label className="cursor-pointer" htmlFor={option.option}>
                {option.option}: {option.text}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handlePreviewQuestion}
        disabled={currentQuestionIndex === 0}
        className="px-4 py-2 text-lg font-semibold rounded-md bg-blue-600 hover:bg-blue-500 text-white transition duration-200"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginLeft: "10px",
        }}
      >
        Preview
      </button>
      <button
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
        className={`ml-2 px-4 py-2 text-lg font-semibold rounded-md transition duration-200 ${
          selectedOption
            ? "bg-blue-600 hover:bg-blue-500 text-white"
            : "bg-gray-600 cursor-not-allowed text-white"
        }`}
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        {currentQuestionIndex < CSSQuiz.questions.length - 1
          ? "Next"
          : "Submit"}
      </button>
    </div>
  );
}

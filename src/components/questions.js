import { Fragment } from "react";
import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import "../App.css";

export default function Questions() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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
    
      
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Trivia Questions for High School
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Boost your knowledge in different areas such as Science,
                English, History, Islamic education, and geography, etc.
              </p>
            </div>
            <div className="w-full bg-gray-200 h-1 mb-6">
              <div className="bg-blue-600 h-1" style={{ width: "0%" }}></div>
            </div>
            <div className="border-t bg-white-500">
            
                <div className="app">
                  {showScore ? (
                    <div className="score-section bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                      <h1 className="text-3xl">
                        {" "}
                        You scored {score} out of {questions.length}
                      </h1>
                    </div>
                  ) : (
                    <>
                      <div className="question-section bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                        <div className="question-count ">
                          <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Question {currentQuestion + 1}/{questions.length}
                            </h3>
                          </span>
                        </div>
                        <div className="question-text mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {questions[currentQuestion].questionText}
                        </div>
                      </div>
                      <div className="answer-section bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 inline-flex">
                        {questions[currentQuestion].answerOptions.map(
                          (answerOption) => (
                            <button
                              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                              onClick={() =>
                                handleAnswerOptionClick(answerOption.isCorrect)
                              }
                            >
                              {answerOption.answerText}
                            </button>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
                {/* <form>
                  <div className="question-section bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                    <div className="question-count ">
                      <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <label class="form-label inline-block mb-2 text-gray-700">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Workbook
                          </h3>
                        </label>
                      </span>
                    </div>
                    <div className="question-text mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <textarea
                        class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="workbook"
                        rows="10"
                        placeholder="Workbook"
                      />
                    </div>
                  </div>
                </form> */}
             
            </div>
          </div>

    
  );
}

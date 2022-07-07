
import React, { useState } from "react";


 

import "../App.css";

export default function Questions() {
  const questions = [
    {
      questionText: "In the human digestive system, absorption of food takes place in the",
      answerOptions: [
        { answerText: "Stomach", isCorrect: false },
        { answerText: "Large Intestine", isCorrect: false },
        { answerText: "Rectum", isCorrect: false },
        { answerText: "Small Intestine", isCorrect: true },
      ],
    },
    {
      questionText: "Which one of the following processes refers to the fusion of the egg and sperm?",
      answerOptions: [
        { answerText: "Implantation", isCorrect: false },
        { answerText: "Parturition", isCorrect: false },
        { answerText: "Fertilization", isCorrect: true },
        { answerText: "Ovulation", isCorrect: false },
      ],
    },
    {
      questionText: "The following practices help to maintain strong and healthy teeth except",
      answerOptions: [
        { answerText: "Eating Vegetables", isCorrect: false },
        { answerText: "Chewing Sugarcane", isCorrect: false },
        { answerText: "Eating Cakes", isCorrect: true },
        { answerText: "Drinking Milk", isCorrect: false },
      ],
    },
    {
      questionText: "Which one of the following vaccines is administered only at birth?",
      answerOptions: [
        { answerText: "DPT", isCorrect: false },
        { answerText: "BCG", isCorrect: true },
        { answerText: "Measles", isCorrect: false },
        { answerText: "Polio", isCorrect: false },
      ],
    },
    {
      questionText: "The fourth and the seventh planets from the sun respectively are",
      answerOptions: [
        { answerText: "Earth and Saturn", isCorrect: false },
        { answerText: "Venus and Neptune", isCorrect:  false},
        { answerText: "Jupiter and Mercury", isCorrect: false },
        { answerText: "Mars and Uranus.", isCorrect: true },
      ],
    },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect:  false},
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
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
              THE KENYA NATIONAL EXAMINATIONS COUNCIL
              </h3>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              Class 8
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Monitoring Learner Achievement at Primary School Level in Kenya
              </p>
            </div>
            {/* progress bar <div className="w-full bg-gray-200 h-1 mb-6">
              <div className="bg-blue-600 h-1" style={{ width: "0%" }}></div>
            </div> */}
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
 
             
            </div>
          </div>

    
  );
}

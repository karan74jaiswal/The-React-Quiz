import { useState } from "react";
import Options from "./Options";
import Footer from "./Footer";
const Question = function ({
  questionData,
  next,
  updatePoints,
  questionNo,
  questions,
  answer,
  handleAnswer,
}) {
  const handleClick = function (option) {
    handleAnswer(option);
    if (option === questionData.correctOption) updatePoints();
  };
  return (
    <>
      <h4>{questionData.question}</h4>
      <Options
        options={questionData.options}
        handleClick={handleClick}
        correctOption={questionData.correctOption}
        answer={answer}
      />
      <Footer>
        <>
          <span className="timer">02:30</span>
          {answer !== null ? (
            <button className="btn btn-ui" onClick={next}>
              {questionNo !== questions - 1 ? "Next" : "Finish"}
            </button>
          ) : (
            ""
          )}
        </>
      </Footer>
    </>
  );
};
export default Question;

import { useState } from "react";
import Options from "./Options";
import Footer from "./Footer";
const Question = function ({
  questionData,
  next,
  updatePoints,
  questionNo,
  questions,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = function (option) {
    setSelectedOption(option);
    if (option === questionData.correctOption) updatePoints();
  };
  return (
    <>
      <h4>{questionData.question}</h4>
      <Options
        options={questionData.options}
        selectedOption={selectedOption}
        handleClick={handleClick}
        correctOption={questionData.correctOption}
      />
      <Footer>
        <>
          <span className="timer">02:30</span>
          {selectedOption !== null ? (
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

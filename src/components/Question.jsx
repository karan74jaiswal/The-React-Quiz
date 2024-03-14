import Options from "./Options";
const Question = function ({
  questionData,
  updatePoints,
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
    </>
  );
};
export default Question;

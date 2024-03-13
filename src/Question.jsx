import Options from "./Options";
const Question = function ({ questionData }) {
  return (
    <>
      <h4>{questionData.question}</h4>
      <Options options={questionData.options} />
    </>
  );
};
export default Question;

const ProgressBar = function ({
  questionNo,
  questions,
  points,
  maximumPoints,
  answer,
}) {
  return (
    <header>
      <div className="progress">
        <progress
          max={questions}
          value={answer !== null ? questionNo + 1 : questionNo}
        />

        <p>
          Question <strong>{questionNo + 1}</strong> / {questions}
        </p>
        <p>
          <strong>{points}</strong> / {maximumPoints}
        </p>
      </div>
    </header>
  );
};
export default ProgressBar;

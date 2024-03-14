const ProgressBar = function ({
  questionNo,
  questions,
  points,
  maximumPoints,
}) {
  return (
    <header>
      <div className="progress">
        <progress max={questions - 1} value={questionNo - 1} />

        <p>
          Question <strong>{questionNo}</strong> / {questions}
        </p>
        <p>
          <strong>{points}</strong> / {maximumPoints}
        </p>
      </div>
    </header>
  );
};
export default ProgressBar;

import Footer from "./Footer";
const Result = function ({ maximumPoints, currentPoints, reset, highScore }) {
  let emoji,
    percentage = Math.round((currentPoints / maximumPoints) * 100);

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage > 0 && percentage < 50) emoji = "🥇";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji} </span>You scored <strong>{currentPoints}</strong> out of{" "}
        {maximumPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <Footer>
        <button className="btn btn-ui" onClick={reset}>
          Restart Quiz
        </button>
      </Footer>
    </>
  );
};
export default Result;

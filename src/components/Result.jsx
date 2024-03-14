import Footer from "./Footer";
const Result = function ({ maximumPoints, currentPoints, reset }) {
  return (
    <>
      <p className="result">
        <span>😐 </span>You scored <strong>{currentPoints}</strong> out of{" "}
        {maximumPoints} ({Math.round((currentPoints / maximumPoints) * 100)}%)
      </p>
      <p className="highscore">(Highscore: {currentPoints} points)</p>
      <Footer>
        <button className="btn btn-ui" onClick={reset}>
          Restart Quiz
        </button>
      </Footer>
    </>
  );
};
export default Result;

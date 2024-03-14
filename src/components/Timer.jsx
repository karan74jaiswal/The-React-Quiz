import { useEffect } from "react";
import Footer from "./Footer";

const Timer = function ({
  answer,
  next,
  questionNo,
  questions,
  secondsRemaining,
  updateTimer,
}) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const intervalTimer = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(intervalTimer);
  }, [updateTimer]);

  return (
    <Footer>
      <>
        <span className="timer">{`${mins.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}</span>
        {answer !== null ? (
          <button className="btn btn-ui" onClick={next}>
            {questionNo !== questions - 1 ? "Next" : "Finish"}
          </button>
        ) : (
          ""
        )}
      </>
    </Footer>
  );
};

export default Timer;

import Error from "./Error";
import Start from "./Start";
import Loader from "./Loader";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Result from "./Result";
import Timer from "./Timer";
import useQuizData from "../hooks/useQuizData";

export default function Main() {
  const {
    isLoading,
    currentQuestion,
    questions,
    started,
    finished,
    currentPoint,
    maximumPoints,
    selectedAnswer,
    highScore,
    secondsRemaining,
    dispatch,
  } = useQuizData();

  const startQuiz = () => dispatch({ type: "start" });
  const updateTimer = () => dispatch({ type: "updateTimer" });
  const nextQuestion = () => {
    if (currentQuestion !== questions.length - 1) dispatch({ type: "next" });
    else dispatch({ type: "finish" });
  };
  const updateAnswer = (option) =>
    dispatch({ type: "handleAnswer", payload: option });
  const updatePoints = () => dispatch({ type: "updatePoints" });
  const reset = () => dispatch("restart");

  return (
    <main className="main">
      {isLoading && <Loader />}
      {questions && !started && (
        <Start questions={questions.length} start={startQuiz} />
      )}
      {!isLoading && !questions && <Error />}
      {started && !finished && (
        <>
          <ProgressBar
            questionNo={currentQuestion}
            questions={questions.length}
            points={currentPoint}
            maximumPoints={maximumPoints}
            answer={selectedAnswer}
          />
          <Question
            questionNo={currentQuestion}
            questions={questions.length}
            questionData={questions[currentQuestion]}
            key={questions[currentQuestion].id}
            next={nextQuestion}
            updatePoints={updatePoints}
            answer={selectedAnswer}
            handleAnswer={updateAnswer}
          />
          <Timer
            answer={selectedAnswer}
            next={nextQuestion}
            questionNo={currentQuestion}
            questions={questions.length}
            secondsRemaining={secondsRemaining}
            updateTimer={updateTimer}
          />
        </>
      )}
      {finished && (
        <Result
          maximumPoints={maximumPoints}
          highScore={highScore}
          currentPoints={currentPoint}
          reset={reset}
        />
      )}
    </main>
  );
}

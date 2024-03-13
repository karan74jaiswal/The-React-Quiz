import { useEffect, useState, useReducer } from "react";
import Error from "./Error";
import Start from "./Start";
import Loader from "./Loader";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Footer from "./Footer";
import Result from "./Result";
function reducer(currentState, action) {
  let newState;
  switch (action.type) {
    case "fetchQuestions":
      newState = {
        ...currentState,
        questions: action.payload,
        isLoading: false,
        maximumPoints: action.payload.reduce(
          (acc, question) => acc + question.points,
          0
        ),
      };
      break;
    case "updateLoading":
      newState = { ...currentState, isLoading: action.payload };
      break;

    case "start":
      newState = {
        ...currentState,
        currentQuestion: 0,
        started: true,
      };
      break;

    case "next":
      newState = {
        ...currentState,
        currentQuestion: currentState.currentQuestion + 1,
      };
      break;

    default:
      newState = {
        ...currentState,
        currentQuestion: {},
      };
  }
  return newState;
}
export default function Main() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    currentQuestion: null,
    questions: null,
    started: false,
    finished: false,
    currentPoint: 0,
    maximumPoints: 0,
  });

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const questions = await (
          await fetch(`http://localhost:3000/questions`)
        ).json();
        dispatch({ type: "fetchQuestions", payload: questions });
      } catch (err) {
        console.warn(err);
      } finally {
        dispatch({ type: "updateLoading", payload: false });
      }
    }
    fetchQuestions();
  }, [state]);

  const startQuiz = function () {
    dispatch({ type: "start" });
  };
  return (
    <main className="main">
      {state.isLoading && <Loader />}
      {state.questions && !state.started && (
        <Start questions={state.questions.length} start={startQuiz} />
      )}
      {!state.isLoading && !state.questions && <Error />}
      {state.started && !state.finished && (
        <>
          <ProgressBar
            questionNo={state.currentQuestion + 1}
            questions={state.questions.length}
            points={state.currentPoint}
            maximumPoints={state.maximumPoints}
          />
          <Question
            questionData={state.questions[state.currentQuestion]}
            key={state.questions[state.currentQuestion].id}
          />
        </>
      )}
      {state.finished && <Result />}
      {state.started && (
        <Footer>
          {!state.finished ? (
            <>
              <span className="timer">02:30</span>
              <button
                className="btn btn-ui"
                onClick={() => {
                  if (state.currentQuestion !== state.questions.length - 1)
                    dispatch({ type: "next" });
                }}
              >
                Next
              </button>
            </>
          ) : (
            <button className="btn btn-ui">Restart Quiz</button>
          )}
        </Footer>
      )}
    </main>
  );
}

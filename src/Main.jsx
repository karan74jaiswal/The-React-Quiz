import { useEffect, useState, useReducer, cloneElement } from "react";
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
      };
      break;

    case "start":
      newState = {
        ...currentState,
        currentQuestion: 1,
        started: true,
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
  });

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const questions = await (
          await fetch(`http://localhost:3001/questions`)
        ).json();
        dispatch({ type: "fetchQuestions", payload: questions });
      } catch (err) {
        console.warn(err);
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
      {!state.isLoading && state.questions && !state.started && (
        <Start questions={state.questions.length} start={startQuiz} />
      )}
      {!state.isLoading && !state.questions && !state.started && <Error />}
      {!state.isLoading &&
        state.questions &&
        state.started &&
        state.currentQuestion && (
          <>
            <ProgressBar />
            <Question />
            <Result />
            <Footer />
          </>
        )}
    </main>
  );
}

import { useEffect, useReducer } from "react";

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

    case "handleAnswer":
      newState = {
        ...currentState,
        selectedAnswer: action.payload,
      };
      break;

    case "next":
      newState = {
        ...currentState,
        currentQuestion: currentState.currentQuestion + 1,
        selectedAnswer: null,
      };
      break;

    case "updatePoints":
      newState = {
        ...currentState,
        currentPoint:
          currentState.currentPoint +
          currentState.questions[currentState.currentQuestion].points,
      };
      break;

    case "finish":
      newState = {
        ...currentState,
        finished: true,
        selectedAnswer: null,
      };
      break;

    default:
      newState = {
        isLoading: false,
        currentQuestion: null,
        questions: currentState.questions,
        started: false,
        finished: false,
        selectedAnswer: null,
        currentPoint: 0,
        maximumPoints: currentState.questions.reduce(
          (acc, question) => acc + question.points,
          0
        ),
      };
  }
  return newState;
}

export default function useQuizData() {
  const [
    {
      isLoading,
      currentQuestion,
      questions,
      started,
      finished,
      currentPoint,
      maximumPoints,
      selectedAnswer,
    },
    dispatch,
  ] = useReducer(reducer, {
    isLoading: true,
    currentQuestion: null,
    questions: null,
    started: false,
    finished: false,
    currentPoint: 0,
    maximumPoints: 0,
    selectedAnswer: null,
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
      } finally {
        dispatch({ type: "updateLoading", payload: false });
      }
    }
    fetchQuestions();
  }, []);

  return {
    isLoading,
    currentQuestion,
    questions,
    started,
    finished,
    currentPoint,
    maximumPoints,
    selectedAnswer,
    dispatch,
  };
}

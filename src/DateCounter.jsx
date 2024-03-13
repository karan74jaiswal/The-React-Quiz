import { useState, useReducer } from "react";

const reducer = function (currentState, action) {
  let newState;
  switch (action.type) {
    case "accelerateCount":
      newState = {
        ...currentState,
        count: currentState.count + action.payload,
      };
      break;
    case "updateCount":
      newState = {
        ...currentState,
        count: action.payload,
      };
      break;
    case "updateStep":
      newState = { ...currentState, step: action.payload };
      break;
    default:
      newState = {
        step: 1,
        count: 0,
      };
  }

  return newState;
};
function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, {
    step: 1,
    count: 0,
  });
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    if (state.count !== 0)
      dispatch({ type: "accelerateCount", payload: -state.step });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "accelerateCount", payload: state.step });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "updateCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({
      type: "updateStep",
      payload: Number(e.target.value),
    });
  };

  const reset = function () {
    // // setCount(0);
    // setStep(1);
    dispatch({
      type: "reset",
    });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
          className="range"
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

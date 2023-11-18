import { useReducer, useState } from "react";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  //should pure
  // if (action.type === "increase") {
  //   return { count: state.count + 1 };
  // }

  // if (action.type === "decrese") {
  //   return { count: state.count - 1 };
  // }

  // if (action.type === "reset") {
  //   return { count: (state.count = 0) };
  // }

  // if (action.type === "setCount") {
  //   return action.playLoad;
  // }
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + state.step };
    case "decrese":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: state.playLoad };
    case "setStep":
      return { ...state, step: action.playLoad };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [State, dispatch] = useReducer(reducer, initialState);
  // console.log(initialState);
  const { count, step } = State;
  // This mutates the date object.
  const date = new Date("june 20 2027");
  // console.log(date); //
  date.setDate(date.getDate() + count);
  // console.log(date);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "decrese" });
  };

  const increase = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "increase" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", playLoad: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));

    dispatch({ type: "setStep", playLoad: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increase}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

import React, { useReducer } from "react";
import styles from "./styles.module.scss";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button
        className={styles.increment}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className={styles.decrement}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
    </>
  );
}

export default Counter;

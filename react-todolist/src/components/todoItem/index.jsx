import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";

import styles from "./styles.module.scss";

export function TodoItem({ data }) {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onHandleClick = (e) => {
    dispatch({ type: "TOGGLE", payload: data.id });
  };

  return (
    <p
      className={data.status ? styles.done : styles.undone}
      onClick={onHandleClick}
    >
      {data.content}
    </p>
  );
}

import { createContext } from "react";

const initialState = {
  todoList: [
    {
      id: "1",
      content: "Andare a correre",
      status: false,
    },
    {
      id: "2",
      content: "Studiare",
      status: false,
    },
    {
      id: "3",
      content: "Comprare una macchina",
      status: false,
    },
    {
      id: "4",
      content: "Migliorare la todolist",
      status: false,
    },
    {
      id: "5",
      content: "Migliorare il css",
      status: false,
    },
  ],
};
const ApplicationCtx = createContext(initialState);

export { ApplicationCtx, initialState };

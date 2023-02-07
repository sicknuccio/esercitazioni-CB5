import { useReducer } from "react";
import "./App.css";
import { ApplicationCtx, initialState } from "../src/store/state";
import { TodoList } from "./components/todoList";

function mainReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        todoList: state.todoList.map((todoitem) => {
          if (todoitem.id == action.payload) {
            todoitem.status = !todoitem.status;
          }
          return todoitem;
        }),
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <div className="App">
        <TodoList></TodoList>
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App;

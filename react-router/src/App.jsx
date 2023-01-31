import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Home</h1>
      <p>Benvenuto nella Home!</p>
      <button
        onClick={() => {
          navigate("/users");
        }}
      >
        Visualizza utenti
      </button>
      <button
        onClick={() => {
          navigate("/posts");
        }}
      >
        Visualizza posts
      </button>
    </div>
  );
}

export default App;

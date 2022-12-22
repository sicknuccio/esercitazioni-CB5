import "./App.css";
import { Layout } from "./layouts/container/layout/Layout";

function App() {
  return (
    <>
      <div className="App">
        <Layout
          children={{
            title: "Questo titolo è stato creato tramite {children}",
            paragraph:
              "Ciao questo paragrafo è stato creato tramite {children}",
          }}
        />
      </div>
    </>
  );
}

export default App;

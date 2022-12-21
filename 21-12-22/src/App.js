import "./App.css";

import { Button } from "./components/Button/button.jsx";
import { Text } from "./components/Text/text.jsx";

function App() {
  return (
    <>
      <div>
        <Button
          className="btn"
          value="Clicca 1"
          variant="smaller"
          onClick={btn_1_click}
        ></Button>
      </div>
      <div>
        <Button className="btn" value="Clicca 2" onClick={btn_2_click}></Button>
      </div>
      <div>
        <Button
          className="btn"
          value="Clicca 3"
          variant="bigger"
          onClick={btn_3_click}
        ></Button>
      </div>
      <Text as="h1" children="Titolo della pagina in h1"></Text>
      <Text as="h3" children="Titolo della pagina in h3"></Text>
      <Text children="Paragrafo della pagina"></Text>
    </>
  );
}

const btn_1_click = () => {
  console.log("cliccato sul bottone piccolo");
};

const btn_2_click = () => {
  console.log("cliccato sul bottone normale");
};

const btn_3_click = () => {
  console.log("cliccato sul bottone grande");
};

export default App;

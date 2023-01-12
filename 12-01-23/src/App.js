import "./App.css";
import { Beers } from "./components/beers/beers";
import { Blood_Types } from "./components/blood_types/blood_types";
import { Credit_Cards } from "./components/credit_cards/credit_cards";
import { Users } from "./components/users/users";
import { Selector } from "./components/selector/Selector";
import { useState } from "react";

function App() {
  const [componentToRender, setComponentToRender] = useState("default");
  const onChangeSelectorValue = (event) => {
    setComponentToRender(event.target.value);
  };

  const defaultComponent = () => {
    return <div>Nessun componente</div>;
  };

  const componentMap = {
    default: defaultComponent,
    users: Users,
    credit_cards: Credit_Cards,
    beers: Beers,
    blood_types: Blood_Types,
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">
      <h1>Tante belle API</h1>
      <Selector onChangeSelectorValue={onChangeSelectorValue} />
      <h2>Ecco i risultati</h2>
      <DynamicComponent />
    </div>
  );
}

export default App;

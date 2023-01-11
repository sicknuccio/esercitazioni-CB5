import "./App.css";
import { Beers } from "./components/beers/beers";
import { Blood_Types } from "./components/blood_types/blood_types";
import { Credit_Cards } from "./components/credit_cards/credit_cards";
import { Users } from "./components/users/users";

function App() {
  return (
    <div>
      <Users />
      <hr></hr>
      <Credit_Cards />
      <hr></hr>
      <Beers />
      <hr></hr>
      <Blood_Types />
    </div>
  );
}

export default App;

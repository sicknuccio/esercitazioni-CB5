import { useEffect } from "react";
import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Users(props) {
  const { data: user, loading, refetch: newUser } = useFetch(ENDPOINT.USERS);
  if (loading) return "Caricamento...";
  return (
    <div className="card">
      <h2>Persona</h2>
      <p>Nome: {user?.first_name}</p>
      <p>Cognome: {user?.last_name}</p>
      <button onClick={newUser}>Nuovo utente</button>
    </div>
  );
}

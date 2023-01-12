import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Users() {
  const {
    data: user,
    loading,
    error,
    refetch: newUser,
  } = useFetch(ENDPOINT.USERS);
  if (error) return error;
  if (loading) return "Caricamento...";
  return (
    <div>
      <p>Nome: {user?.first_name}</p>
      <p>Cognome: {user?.last_name}</p>
      <button onClick={newUser}>Nuovo utente</button>
    </div>
  );
}

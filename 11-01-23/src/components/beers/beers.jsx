import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Beers() {
  const {
    data: beer,
    loading,
    error,
    refetch: newBeer,
  } = useFetch(ENDPOINT.BEERS);
  if (error) return error;
  if (loading) return "Caricamento...";
  return (
    <div>
      <p>Brand: {beer?.brand}</p>
      <p>Nome: {beer?.name}</p>
      <button onClick={newBeer}>Nuova birra</button>
    </div>
  );
}

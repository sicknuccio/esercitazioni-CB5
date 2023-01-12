import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Beers(props) {
  const { data: beer, loading, refetch: newBeer } = useFetch(ENDPOINT.BEERS);
  if (loading) return "Caricamento...";
  return (
    <div className="card">
      <h2>Birra preferita</h2>
      <p>Brand: {beer?.brand}</p>
      <p>Nome: {beer?.name}</p>
      <button onClick={newBeer}>Nuova birra</button>
    </div>
  );
}

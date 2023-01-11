import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Credit_Cards(props) {
  const {
    data: credit_card,
    loading,
    refetch: newCreditCard,
  } = useFetch(ENDPOINT.CREDIT_CARDS);
  if (loading) return "Caricamento...";
  return (
    <div>
      <p>Numero della carta: {credit_card?.credit_card_number}</p>
      <p>Scadenza: {credit_card?.credit_card_expiry_date}</p>
      <button onClick={newCreditCard}>Nuova carta</button>
    </div>
  );
}

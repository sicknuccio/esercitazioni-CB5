import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Credit_Cards() {
  const {
    data: credit_card,
    loading,
    error,
    refetch: newCreditCard,
  } = useFetch(ENDPOINT.CREDIT_CARDS);
  if (error) return error;
  if (loading) return "Caricamento...";
  return (
    <div>
      <p>Numero della carta: {credit_card?.credit_card_number}</p>
      <p>Scadenza: {credit_card?.credit_card_expiry_date}</p>
      <button onClick={newCreditCard}>Nuova carta</button>
    </div>
  );
}

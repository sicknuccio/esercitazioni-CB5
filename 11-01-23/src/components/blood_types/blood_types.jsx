import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Blood_Types() {
  const {
    data: blood_type,
    loading,
    error,
    refetch: newBloodType,
  } = useFetch(ENDPOINT.BLOOD_TYPES);
  if (loading) return "Caricamento...";
  if (error) return error;
  return (
    <div>
      <p>Gruppo sanguigno: {blood_type?.group}</p>
      <p>ID: {blood_type?.id}</p>
      <button onClick={newBloodType}>Nuovo sangue</button>
    </div>
  );
}

import { ENDPOINT } from "../fetch/constants/constants";
import { useFetch } from "../fetch/hooks/useFetch";

export function Blood_Types(props) {
  const {
    data: blood_type,
    loading,
    refetch: newBloodType,
  } = useFetch(ENDPOINT.BLOOD_TYPES);
  if (loading) return "Caricamento...";
  return (
    <div className="card">
      <h2>Gruppo sanguigno</h2>
      <p>Gruppo sanguigno: {blood_type?.group}</p>
      <p>ID: {blood_type?.id}</p>
      <button onClick={newBloodType}>Nuovo sangue</button>
    </div>
  );
}

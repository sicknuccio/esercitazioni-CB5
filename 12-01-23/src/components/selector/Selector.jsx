export function Selector(props) {
  const { onChangeSelectorValue } = props;
  return (
    <select onChange={onChangeSelectorValue}>
      <option disabled selected value="">
        Seleziona una categoria
      </option>
      <option value="users">Persona</option>
      <option value="credit_cards">Carta di credito</option>
      <option value="beers">Birra</option>
      <option value="blood_types">Gruppo Sanguigno</option>
    </select>
  );
}

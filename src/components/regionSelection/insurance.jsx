export function Insurance({ incuranced, setIncuranced }) {
  function onChange(event) {
    setIncuranced(event.target.checked);
  }
  return (
    <label>
      <input onChange={onChange} type="checkbox" checked={incuranced} />
      Со страховкой
    </label>
  );
}

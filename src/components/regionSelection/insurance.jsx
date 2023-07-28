export function Insurance({ incuranced, setIncuranced }) {
  function onChange(event) {
    setIncuranced(!event.target.checked);
    //console.log(event.target.checked);
  }

  return (
    <label>
      <input onChange={onChange} type="checkbox" defaultChecked={incuranced} />
      Со страховкой
    </label>
  );
}

export function GetTyps({ typsTitle, typsItems, types, setTypes }) {
  function onClick(item) {
    setTypes(item);
  }

  const typesKey = Object.keys(typsItems);
  return (
    <section>
      <h2 className="typesTitle">{typsTitle}</h2>
      <form>
        {typesKey.map((item, i) => (
          <div key={i}>
            <label
              style={
                types === item ? { color: "#0468FF" } : { color: "#000000" }
              }
              className="inputLabel"
            >
              <input
                type="radio"
                id={item}
                name="item"
                value="item"
                onClick={() => onClick(item)}
                defaultChecked={types === item ? true : false}
              />
              {typsItems[item]}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
}

export function GetTyps({ typsTitle, typsItems, types, setTypes }) {
  const typeTitleObj = {
    all: "всё",
    resale: "Вторичка",
    newBuilding: "Новостройка",
    house: "Дом",
    room: "Квартира",
    apartment: "Апартаменты",
  };

  //const keystypeTitleObj = Object.keys(typeTitleObj);

  function onClick(item) {
    //console.log(item);
    setTypes(item);
  }
  console.log(types);
  return (
    <section>
      <h2>{typsTitle}</h2>
      <form>
        {typsItems.map((item, i) => (
          <div key={i}>
            <label
              style={
                types === item ? { color: "#0468FF" } : { color: "#000000" }
              }
            >
              <input
                type="radio"
                id={item}
                name="item"
                value="item"
                onClick={() => onClick(item)}
                checked={types === item ? true : false}
              />
              {typeTitleObj[item]}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
}

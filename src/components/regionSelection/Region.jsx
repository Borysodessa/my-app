import "./styles.css";
import regions from "./regions";
import { useState } from "react";

export function Region({ closeRegion, selectIdRegion }) {
  const [filterText, setFilterText] = useState("");

  function handleInput(event) {
    setFilterText(event.target.value);
  }

  function clearInput() {
    setFilterText("");
  }

  const fillteredRegions = regions.filter((region) =>
    region["name"].toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
  );

  return (
    <section className="region-section">
      <div className="header">
        <h1 className="select-region-title">Выбрать регион</h1>
        <button className="modal-close-wrap" onClick={closeRegion}></button>
      </div>
      <input
        className="select-regions-input"
        type="text"
        placeholder="Поиск"
        value={filterText}
        onInput={handleInput}
      />

      <button className="clear-input" onClick={clearInput}>
        Сброс
      </button>

      {fillteredRegions.map((fillteredRegion) => (
        <li
          key={fillteredRegion.id}
          className="region-name"
          onClick={() => selectIdRegion(fillteredRegion.id)}
        >
          {" "}
          {fillteredRegion.name}
        </li>
      ))}
    </section>
  );
}

// https://react.dev/reference/react-dom/components/input

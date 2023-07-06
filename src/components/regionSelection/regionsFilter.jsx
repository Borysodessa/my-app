import "./styles.css";
//import { useState } from "react";
import { years } from "./functions";

export function RegionsFilter({
  label,
  button,
  unit,
  min,
  max,
  value,
  setValue,
}) {
  function handleInput(event) {
    setValue(event.target.value);
  }

  function handleClick(e) {
    setValue(e.target.name);
  }

  return (
    <div className="conditions__wrap">
      <label className="conditions__label">{label}</label>
      <input
        className="conditions__input"
        type="text"
        value={value}
        onInput={handleInput}
      />

      <span className="conditions__span">
        {typeof unit === "string" ? unit : years(value, unit)}
      </span>

      <input
        className="range"
        min={min}
        max={max}
        type="range"
        value={value}
        name="range"
        onInput={handleInput}
      />

      <ul className="condition__list">
        {button.map((el, i) => (
          <button
            key={i}
            className="conditions__bottom"
            type="button"
            name={el}
            onClick={handleClick}
          >
            {el}
            {typeof unit === "string" ? unit : years(el, unit)}
          </button>
        ))}
      </ul>
    </div>
  );
}

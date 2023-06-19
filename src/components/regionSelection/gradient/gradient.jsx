import { useState } from "react";

const initialColors = {
  color1: "",
  color2: "",
  hrherkuh: "",
};

export function MakeGradient() {
  // const [color1, setColor1] = useState('');
  // const [color2, setColor2] = useState('');

  const [colors, setColors] = useState(initialColors);

  const { color1, color2 } = colors;

  const [background, setBackground] = useState();

  //   function handleInput1(event) {
  //       setColor1(event.target.value)
  //   }

  //   function handleInput2(event) {
  //       setColor2(event.target.value)
  //   }

  function handleClear() {
    setColors(initialColors);
  }

  function handleInput(event) {
    // const obj = {
    //   color1: "A",
    //   color2: "B",
    //   color3: "C",
    // };

    // event.target.name === "color2";
    // event.target.value === "X";

    // {
    //   color1: "A",
    //   color2: "X",
    //   color3: "C",
    // };

    console.log(event.target.name);
    // setColors({
    //   color1: event.target.name === "color1" ? event.target.value : color1,
    //   color2: event.target.name === "color2" ? event.target.value : color2,
    // });

    // const obj = {
    //   color1: colors.color1,
    //   color2: colors.color2,
    // };
    // obj[event.target.name] = event.target.value;
    const obj = {
      ...colors,
      [event.target.name]: event.target.value,
    };

    setColors(obj);
  }

  function handleClick(event) {
    event.preventDefault();
    setBackground(`linear-gradient(${color1}, ${color2})`);
  }

  return (
    <div
      style={{
        height: 1000,
        paddingTop: 30,
        background,
      }}
    >
      <form onSubmit={handleClick}>
        <input
          value={colors.color1}
          className="backgrounColor1"
          name="color1"
          type="text"
          onInput={handleInput}
        ></input>
        <input
          value={colors.color2}
          className="backgrounColor2"
          name="color2"
          type="text"
          onInput={handleInput}
        ></input>
        <button type="submit">Go</button>

        <button type="button" onClick={handleClear}>
          {" "}
          Clear{" "}
        </button>
      </form>
    </div>
  );
}

// https://legacy.reactjs.org/docs/dom-elements.html#style

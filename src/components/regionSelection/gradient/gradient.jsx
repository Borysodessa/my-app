import { useState } from "react"

export function MakeGradient() {

    // const [color1, setColor1] = useState('');
    // const [color2, setColor2] = useState('');
    
    const [colors, setColors] = useState({
        color1: "",
        color2: "",
    });

    const {color1, color2} = colors;

    const [background, setBackground] = useState();

    // function handleInput1(event) {
    //     setColor1(event.target.value)
    // }

    // function handleInput2(event) {
    //     setColor2(event.target.value)
    // }

    function handleInput(event) {
        console.log(event.target.name)
        setColors(
            
         )
    }

    function handleClick(event) {
        event.preventDefault();
        setBackground(`linear-gradient(${color1}, ${color2})`);
    }
   // console.log(background)
    return (

        <div style={{
            height: 1000,
            paddingTop: 30,
            background,
        }}>
            <form onSubmit={handleClick}>
                <input className="backgrounColor1" name="input1" type="text" onInput={handleInput}></input>
                <input className="backgrounColor2" name="input2" type="text" onInput={handleInput}></input>
                <button type="submit">Go</button>
                {/* clear inputs button */}
            </form>
        </div>
    )
}


// https://legacy.reactjs.org/docs/dom-elements.html#style
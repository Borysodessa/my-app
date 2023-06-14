import { useState } from "react"

export function MakeGradient() {
    
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [styles, setStyles] = useState({});
    
    function handleInput1(event) {
        setColor1(event.target.value)
    }

    function handleInput2(event) {
        setColor2(event.target.value)
    }

    function handleClick(event) {
       
        setStyles({
            // backgroundColor: `${'linear-gradient' + '(' + color1 + ', ' + color2 + ')'}`
           //backgroundColor: color1,
            backgroundImage: 'linear-gradient' + `(${color1}, ${color2})`,
            height: 1000,
            paddingTop: 30
        });
    } console.log('>>>>>', styles);
   
return(

<div style={styles}>
    <form >
        <input className="backgrounColor1" type="text" onInput={handleInput1}></input>
        <input className="backgrounColor2" type="text" onInput={handleInput2}></input> 
        <button type="button" onClick={handleClick}>Go</button>   
    </form>
</div>
    )
}


// https://legacy.reactjs.org/docs/dom-elements.html#style
import { useState } from "react"

export function MakeGradient() {
    
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    
    function handleInput1(event) {
        setColor1(event.target.value)
    }

    function handleInput2(event) {
        setColor2(event.target.value)
    }

    function handleClick() {
       
        const obj = {
           backgroundColor: ` ${'linear-gradient' + '(' + color1 + ',' + color2 + ')'}`
        }
        console.log(obj.backgroundColor)
    }
    // console.log(handleClick(color1,color2))
return(


<div >
    <form >
        <input className="backgrounColor1" type="text" onInput={handleInput1}></input>
        <input className="backgrounColor2" type="text" onInput={handleInput2}></input> 
        <button type="button" onClick={handleClick}>Go</button>   
    </form>
</div>
    )
}


// https://legacy.reactjs.org/docs/dom-elements.html#style
import alfa from '../images/Alfa.svg';
import other from '../images/Other.svg';
import vtb from '../images/VTB.svg';
console.log(alfa)

export function Header({ header }) {
     
    console.log(header);
    if (header === 'bank-alfa') {
        return <img src={alfa}></img>; 
    }
    if (header === 'bank-vtb-new') {
        return <img src={vtb}></img>;
    }
        return <img src={other}></img>;
        
        

    
}
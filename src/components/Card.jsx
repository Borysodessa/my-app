import { App } from './App';
//import logo from '../images'
import { FeaturesShow } from './functionOffer';
import { Header } from './Header';
//console.log(">>>>>", vtb);

export const Card = ({ bankId, type, rate, maxAmount,
    minInitialPayment, features }) => {
return(
<div className="card">
    <h1 className="card-title">{bankId}</h1>
    <p className="type"> {type} </p>
    
        <Header header ={bankId}/>
    
    <p className="features">
        <FeaturesShow featuresShow ={features} /> 
    </p>
      
        
    <span className="cardMore"></span>
    <ul className="finans-prop">
    <li><p>Ставка</p><span>{rate}</span></li>
        <li><p>Макс. кредит</p><span>{maxAmount}</span></li>
        <li><p>Взнос от</p><span>{minInitialPayment }</span></li>
    </ul>
    <div>
        <p>Только для квартир больше 100 м2</p>
    </div>
    <button className="button-detail">Подробнее</button>
    <button className="need">consultation</button>
</div>
    );
}
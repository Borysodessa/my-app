import { App } from './App';
import { FeaturesShow } from './functionOffer';
import { Header } from './Header';
import { offersElements } from './features'

export const Card = ({ bankId, product, rate, maxAmount,
    minInitialPayment, features }) => {
return(
<div className="card">
    <Header  bankId={bankId} product={product}/>
    <p className="features">
        <FeaturesShow featuresShow ={features}/> 
    </p>
    <span className="cardMore"></span>
    <ul className="finans-prop">
        <li><p className="conditions-text">Ставка</p><span className="conditions-span">{rate}</span></li>
        <li><p className="conditions-text">Макс. кредит</p><span className="conditions-span">{maxAmount}</span></li>
        <li><p className="conditions-text">Взнос от</p><span className="conditions-span">{minInitialPayment }</span></li>
    </ul>
  <button className="button-detail">Подробнее</button>
</div>
);
}
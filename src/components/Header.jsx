import './styles.css'
import { banks } from './banks'
import { banksLogo } from './banks';

export function Header({ bankId, product }) {
   return (
            <div className='header'>
                <h1 className="card-title" > {banks[bankId]} </h1>
                <img className="logo-img" src={banksLogo[bankId]}></img>
                <p className="product"> {product === 'USED' ? 'б.у': 'Новостройка'} </p>
            </div>
    )
}

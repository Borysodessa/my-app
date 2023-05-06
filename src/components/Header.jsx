import alfa from '../images/Alfa.svg';
import other from '../images/Other.svg';
import vtb from '../images/VTB.svg';
import './styles.css'

export function Header({ header, product }) {
    if (header === 'bank-alfa') {
        return (
            <div className='header'>
                <h1 className="card-title" > Альфабанк</h1>
                <img className="logo-img" src={alfa}></img>
                <p className="product"> {product === 'USED' ? 'б.у': 'Новостройка'} </p>
            </div>
        )
    }
    if (header === 'bank-vtb-new') {
        return (
            <div className='header'>
                <h1 className="card-title" > ВTБ</h1>
                <img className="logo-img" src={vtb}></img>
                <p className="product"> {product === 'USED' ? 'б.у': 'Новостройка'} </p>
            </div>
        )
    }
    return (
        <div className='header'>
            <h1 className="card-title" >{header}</h1>
            <img className="logo-img" src={other}></img>
            <p className="product"> {product === 'USED' ? 'б.у': 'Новостройка'} </p>
        </div>
    )
}
import cian from './images/cian.svg';
import heart from './images/heart.svg'
import './styles.css';

export function MeinHeader() {
    
return (
    <div className="main-header">
        
        <div className='header-burger-wrap'>
            <div className="header-burger">
                <span className="burger-span"></span>
            </div>
            <img className='header-heart-img' src={cian} alt="logo_cian"/>
            <h1 className='header-cian-title'>циан</h1>
        </div>
            <img src={heart} alt="logo_heart" />
      
    </div>
)
}
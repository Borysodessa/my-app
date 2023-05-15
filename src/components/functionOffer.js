import { featuresLogo } from './features';
import { offers } from './offers';


export function FeaturesShow({ featuresShow }) {
//console.log('132156', featuresLogo[featuresShow[0]].text);
    if(featuresShow === undefined){
        return;
    }
    if (featuresShow.length === 0) {
        return;
    }
        return (
            <div>
                
                { <img src={featuresLogo[featuresShow[0]].logo}></img> }
                <p className="features-text">{featuresLogo[featuresShow[0]].text}</p>
                <span className= "features-quantity"> + {featuresShow.length -1} </span>
            </div>   
        )
}
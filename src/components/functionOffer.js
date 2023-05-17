import { featuresParams } from './features';
import { offers } from './offers';

export function FeaturesShow({ featuresShow }) {
    if(featuresShow === undefined){
        return;
    }
    if (featuresShow.length === 0) {
        return;
    }
        return (
            <div className="wrap-features">
            <div className="wrap-logo-text" style={{background: featuresParams[featuresShow[0]].backgroundСolor }}>
                <img className="features-logo" src={featuresParams[featuresShow[0]].logo}></img> 
                <p className="features-text" style={{ color: featuresParams[featuresShow[0]].color }}>{featuresParams[featuresShow[0]].text}</p>
            </div>
                <span className="features-quantity"> + {featuresShow.length - 1}</span>
            </div>   
        )
}
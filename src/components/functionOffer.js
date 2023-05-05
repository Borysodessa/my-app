export function FeaturesShow({featuresShow}) {
    if(featuresShow === undefined){
        return;
    }
    if (featuresShow.length === 0) {
        return;
    }
    if(featuresShow.length === 1){
        return featuresShow[0];
    }
    if(featuresShow.length > 1){
        return featuresShow[0] ;
    }
    
}
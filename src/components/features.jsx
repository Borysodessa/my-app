import './styles.css'

import best from '../imagesBagCard/best_rate.svg'
import cian from '../imagesBagCard/onlyCian.svg'
import family from '../imagesBagCard/Frame.svg'
import matKapital from '../imagesBagCard/mum.svg'
import supportNew from '../imagesBagCard/buy.svg'

export const featuresLogo = {
    DISCOUNT_FOR_CIAN: {
        logo: cian,
        text:'Ставка только на Циан.Ипотека',
        color: '#FFFFFF',
        backgroundСolor: '#0468FF'
    },
    GOS_HELP_FAMILY:{
        logo: family,
        text:'Для семей с двумя детьми',
        color: '#FFFFFF',
        backgroundСolor: '#FF7E00'
    }, 
    MATERNITY_CAPITAL:{
        logo: matKapital,
        text:'Для семей с двумя детьми',
        color: '#0468FF',
        backgroundСolor: 'rgba(4, 104, 255, 0.1)'
    }, 
    GOS_HELP_IGS:{
        logo: supportNew,
        text:'Господдержка для новостроек',
        color:  '#FFFFFF',
        backgroundСolor: '#FF7E00'
    }, 
    GOS_HELP_COVID:{
        logo: best,
        text:'Ваша лучшая ставка',
        color: '#0468FF',
        backgroundСolor: '#3AC500'
    }, 
}

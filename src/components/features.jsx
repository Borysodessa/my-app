import './styles.css'

import best from '../imagesBagCard/best_rate.svg'
import cian from '../imagesBagCard/onlyCian.svg'
import family from '../imagesBagCard/children.svg'
import matKapital from '../imagesBagCard/mum.svg'
import supportNew from '../imagesBagCard/supportNew.svg'

export const featuresParams = {
    DISCOUNT_FOR_CIAN: {
        logo: cian,
        text:'Ставка только на Циан.Ипотека',
        color: '#FFFFFF',
        background: '#0468FF'
    },
    GOS_HELP_FAMILY:{
        logo: family,
        text:'Для семей с двумя детьми',
        color: '#FFFFFF',
        background: '#FF7E00'
    }, 
    MATERNITY_CAPITAL:{
        logo: matKapital,
        text:'Материнский капитал',
        color: '#0468FF',
        background: 'rgba(4, 104, 255, 0.1)'
    }, 
    GOS_HELP_IGS:{
        logo: supportNew,
        text:'Господдержка для новостроек',
        color:  '#FFFFFF',
        background: '#FF7E00'
    }, 
    GOS_HELP_COVID:{
        logo: best,
        text:'Ваша лучшая ставка',
        color: '#FFFFFF',
        background: '#3AC500'
    }, 
}


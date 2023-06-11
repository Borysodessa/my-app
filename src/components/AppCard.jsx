import { Card } from './Card'
import { offers } from './offers';
import './styles.css'

// function unikBankId(offers) {
//     console.log(offers);
//         const unikId = [];
//     for (const offer of offers) {
//         if (!unikId.some(id => id === offer.bankId)) {
//             unikId.push(offer.bankId)
//         }
//     }
//    return unikId;
// }

// function features(offers) {
//     const set = new Set();
//   for (const offer of offers) {
//     //offer.features
//     if (!offer.hasOwnProperty('features')) {
//           continue;
//     }
//     if (offer.features.length === 0 ) {
//         continue;
//     }
//         set.add(...offer.features)
    
//     }
//     return set;
// }
// console.log(features(offers));
//{'DISCOUNT_FOR_CIAN', 'GOS_HELP_FAMILY', 'MATERNITY_CAPITAL', 'GOS_HELP_IGS', 'GOS_HELP_COVID'}

    const banks = {
    'bank-vtb-new': 'ВТБ',
    'bank-alfa': 'Альфабанк',
    'bank-delta': 'Дельта-Банк',
    'bank-raif': 'Райффайзенбанк',
    'bank-gpb': 'Газпромбанк',
    'bank-open': 'Открытие'
}

export const App = () => {
    return (
        <section className="section-cards">
           { offers.map((offer, i) => (
            <Card
                bankId={offer.bankId}
                type={offer.type}
                product={offer.product}
                typeRate={offer.rate}
                rate={offer.rate}
                maxAmount={offer.maxAmount}
                minInitialPayment={offer.minInitialPayment}
                features={offer.features}
            />
           )
        )}
        </section>
    );
}
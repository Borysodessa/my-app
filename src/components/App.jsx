import { Card } from './Card'
import { offers } from './offers';
import './styles.css'

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
import { Card } from "./Card";
import "./styles.css";

export const AppCard = ({ offers }) => {
  return (
    <section className="section-cards">
      <p>всего: {offers.length} </p>
      {offers.map((offer, i) => (
        <Card
          key={offer.offerId}
          bankId={offer.bankId}
          type={offer.type}
          product={offer.product}
          typeRate={offer.rate}
          rate={offer.rate}
          maxAmount={offer.maxAmount}
          minInitialPayment={offer.minInitialPayment}
          features={offer.features}
        />
      ))}
    </section>
  );
};

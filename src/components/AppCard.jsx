import { Card } from "./Card";
import "./styles.css";

const banks = {
  "bank-vtb-new": "ВТБ",
  "bank-alfa": "Альфабанк",
  "bank-delta": "Дельта-Банк",
  "bank-raif": "Райффайзенбанк",
  "bank-gpb": "Газпромбанк",
  "bank-open": "Открытие",
};

export const AppCard = ({ offers }) => {
  return (
    <section className="section-cards">
      <p>всего: {offers.length} </p>
      {offers.map((offer, i) => (
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
      ))}
    </section>
  );
};

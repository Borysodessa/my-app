import { FeaturesShow } from "./functionOffer";
import { Header } from "./Header";
import { FormatRate } from "./condition-text-format";
import { FormatMaxAmount } from "./condition-text-format";
import { FormatMinInitialPayment } from "./condition-text-format";

import "./styles.css";

export const Card = ({
  bankId,
  product,
  rate,
  maxAmount,
  minInitialPayment,
  features,
  selectBank,
}) => {
  return (
    <div className="card">
      <Header bankId={bankId} product={product} />

      <div className="features">
        <FeaturesShow featuresShow={features} />
      </div>
      <ul className="finans-prop">
        <li>
          <p className="conditions-text bid">Ставка</p>
          <FormatRate formatRate={rate} />
        </li>
        <li>
          <p className="conditions-text ">Макс.кредит</p>
          <FormatMaxAmount formatMaxAmount={maxAmount} />
        </li>
        <li>
          <p className="conditions-text">Взнос от</p>
          <FormatMinInitialPayment
            formatMinInitialPayment={minInitialPayment}
          />
        </li>
      </ul>
      <button className="button-detail">Подробнее</button>
    </div>
  );
};

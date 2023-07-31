import "./styles.css";
import { useState } from "react";
import { RegionsFilter } from "../components/regionSelection/regionsFilter";
import { BankList } from "./regionSelection/regionBank";
import { regionBanksName } from "./regionSelection/regionBanksName";
import { regionBanksLogo } from "./regionSelection/regionBanksName";
import { GetTyps } from "./regionSelection/typs";
import { Insurance } from "./regionSelection/insurance";
import { AppCard } from "./AppCard";
import { offers } from "./offers";

export const App = () => {
  const [creditTerm, setcreditTerm] = useState(3);
  const [anInitialFee, setAnInitialFee] = useState(1);
  const [selectBank, setSelectBank] = useState([
    "bank-rosbankDom",
    "bank-open",
  ]);
  const [typeObj, setTypeObj] = useState("ALL");
  const [typeHousing, setTypeHousing] = useState("FLAT");
  const [incuranced, setIncuranced] = useState(true);

  const filteredOffers = offers.filter((offer) =>
    selectBank.includes(offer.bankId)
  );

  const filteredTypes = filteredOffers.filter((obj) => {
    if (typeObj === "ALL") {
      return true;
    }
    return obj.product === typeObj;
  });

  const filteredByPropertyType = filteredTypes.filter((offer) => {
    //console.log(offer.requirements.find((el) => el.key === "PROPERTY_TYPE"));
    return (
      offer.requirements.find((el) => el.key === "PROPERTY_TYPE").value ===
      typeHousing
    );
  });

  const filteredByInsurance = filteredByPropertyType.filter((offer) => {
    return offer.requirements.some(
      (el) => el.key === "INSURANCE" && el.value === incuranced
    );
  });

  return (
    <section className="mortgageSettings">
      <div className="container">
        <h1 className="mortgageSettingstitle">Настройка ипотеки</h1>
        <RegionsFilter
          label={"кредит"}
          button={[3, 11, 15, 20]}
          unit={"₽"}
          min={1}
          max={30}
          value={creditTerm}
          setValue={setcreditTerm}
        />
        <RegionsFilter
          label={"Срок кредита"}
          button={[3, 11, 15, 20]}
          unit={[" год", " года", " лет"]}
          min={3}
          max={30}
          value={creditTerm}
          setValue={setcreditTerm}
        />
        <RegionsFilter
          label={"Первоначальный взнос"}
          button={[10, 15, 30, 50, 80]}
          unit={" %"}
          min={10}
          max={80}
          value={anInitialFee}
          setValue={setAnInitialFee}
        />
        <BankList
          title={"Банк"}
          bankName={regionBanksName}
          logoName={regionBanksLogo}
          selectBank={selectBank}
          setSelectBank={setSelectBank}
        />
        <GetTyps
          typsTitle={"Тип объекта"}
          typsItems={{
            ALL: "всё",
            USED: "Вторичка",
            NEW: "Новостройка",
          }}
          types={typeObj}
          setTypes={setTypeObj}
        />
        <GetTyps
          typsTitle={"Тип жилья"}
          typsItems={{
            COTTAGE: "Дом",
            FLAT: "Квартира",
            APARTMENTS: "Апартаменты",
          }}
          types={typeHousing}
          setTypes={setTypeHousing}
        />
        <Insurance incuranced={incuranced} setIncuranced={setIncuranced} />
      </div>

      <AppCard offers={filteredByInsurance} selectBank={selectBank} />
    </section>
  );
};

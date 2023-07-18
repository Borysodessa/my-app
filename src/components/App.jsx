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
  const [creditTerm, setcreditTerm] = useState(0);
  const [anInitialFee, setAnInitialFee] = useState(1);
  const [selectBank, setSelectBank] = useState(["rosbankDom", "open"]); // <----
  const [typeObj, setTypeObj] = useState("all");
  const [typeHousing, setTypeHousing] = useState("house");
  const [incuranced, setIncuranced] = useState(true);

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
          min={1}
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
          typsItems={["all", "resale", "newBuilding"]}
          types={typeObj}
          setTypes={setTypeObj}
        />
        <GetTyps
          typsTitle={"Тип жилья"}
          typsItems={["house", "room", "apartment"]}
          types={typeHousing}
          setTypes={setTypeHousing}
        />
        <Insurance incuranced={incuranced} setIncuranced={setIncuranced} />
      </div>

      <AppCard offers={offers} />
    </section>
  );
};

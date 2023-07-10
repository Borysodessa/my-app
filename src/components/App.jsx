import "./styles.css";
import { useState } from "react";
import { Region } from "./regionSelection/Region.jsx";
import regions from "./regionSelection/regions.js";
import { MeinHeader } from "./regionSelection/region-main-header";
import { RegionsFilter } from "../components/regionSelection/regionsFilter";
import { BankList } from "./regionSelection/regionBank";
import { regionBanksName } from "./regionSelection/regionBanksName";
import { regionBanksLogo } from "./regionSelection/regionBanksName";
import { GetTyps } from "./regionSelection/typs";

export const App = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(null);
  const [creditTerm, setcreditTerm] = useState(0);
  const [anInitialFee, setAnInitialFee] = useState(1);

  function idRegions(id) {
    setSelect(id);
    setOpen(false);
  }

  function handleClick() {
    setOpen(true);
  }

  function handleClickClose() {
    setOpen(false);
  }

  const regionName = regions.find((region) => region.id === select)?.name;
  return (
    <section className="regionSection">
      <MeinHeader />
      <button onClick={handleClick}>
        {!select ? "Выберите регион" : regionName}
      </button>
      {open && (
        <Region closeRegion={handleClickClose} selectIdRegion={idRegions} />
      )}
      <section className="mortgageSettings">
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
        />
        <GetTyps typsTitle={"Тип объекта"} />
        <GetTyps typsTitle={"Тип жилья"} />
      </section>
    </section>
  );
};

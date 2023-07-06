import "./styles.css";
import { useState } from "react";
import { Region } from "./regionSelection/Region.jsx";
import regions from "./regionSelection/regions.js";
import { MeinHeader } from "./regionSelection/region-main-header";
import { RegionsFilter } from "../components/regionSelection/regionsFilter";

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
    <section>
      <MeinHeader />
      <button onClick={handleClick}>
        {!select ? "Выберите регион" : regionName}
      </button>
      {open && (
        <Region closeRegion={handleClickClose} selectIdRegion={idRegions} />
      )}

      <h1 className="hypothecSettingTitle">Настройка ипотеки</h1>

      <RegionsFilter
        label={"Срок кредита"}
        button={[3, 11, 15, 20]}
        unit={["год", "года", "лет"]}
        min={1}
        max={30}
        value={creditTerm}
        setValue={setcreditTerm}
      />
      <RegionsFilter
        label={"Первоначальный взнос"}
        button={[10, 15, 30, 50, 80]}
        unit={"%"}
        min={10}
        max={80}
        value={anInitialFee}
        setValue={setAnInitialFee}
      />
    </section>
  );
};

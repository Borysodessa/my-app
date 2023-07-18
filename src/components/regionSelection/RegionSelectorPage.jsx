import { useState } from "react";
import { Region } from "./Region.jsx";
import regions from "./regions.js";
import { MeinHeader } from "./region-main-header";

export function RegionSelectorPage() {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(null);

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
    </section>
  );
}

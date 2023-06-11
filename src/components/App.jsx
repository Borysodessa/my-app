import { useState } from 'react';
import { Region } from './regionSelection/Region.jsx';
import  regions  from './regionSelection/regions.js';
import './styles.css'

export const App = () => {

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
   
    const regionName = regions.find(region => region.id === select)?.name; 
    return (
        <section>
            <button 
                onClick={handleClick} > {!select ? 'Выберите регион' : regionName}
            </button>
          
            {open && <Region
                closeRegion={handleClickClose}
                selectIdRegion={idRegions}
            />}
        </section>
    );
}
                

import Buket from './Buket';
import Button from './Button.js';
import { useState } from "react";
import { data } from './data';

function OurProdact (){
    const [buket, setBuket]=useState(data);


    const Bouquet=(name)=>{
      const newBuket=data.filter(element=>element.name===name);
    setBuket(newBuket);
    }

    return (
        <div id="bouquet_section">
<div>
        <div className='ourBouquets'>
        <h2>Our bouquets and gifts</h2>
        </div>
      <Button chosenBuket={Bouquet} data={data} setBuket={setBuket} />
      </div>
      <Buket itemsForSale={buket}/>
    </div>

    )
}
export default OurProdact;
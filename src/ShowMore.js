import { useState } from "react";
import { dataTwo } from "./dataTwo";


function ShowMore() {
    const [showMore, setShowMore]=useState(false);

    return(
        <div>
           <p>{showMore ? dataTwo[0].textP : dataTwo[0].textP.substring(0, 465) + "..."}
            <button className='btnShowMore' onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
            </p>
        </div>
    )
  }
  export default ShowMore;
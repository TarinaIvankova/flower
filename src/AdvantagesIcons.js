import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";

function AdvantagesIcons () {

    return (
        <div className="icons">
<div className="iconChild">
<img className="icons" src={Icon1} width="50px" height="50px" alt="iconOne"/>
<p className="textIcon">NEXT DAY DELIVERY /7 DAYS A WEEK</p>
</div>
<div className="iconChild">
<img className="icons" src={Icon2} width="50px" height="50px" alt="iconTwo"/>
<p className="textIcon">HANDCRAFTED CHOCOLATE</p>
</div>
<div className="iconChild">
<img className="icons" src={Icon3} width="50px" height="50px" alt="iconThree"/>
<p className="textIcon">FREE DELIVERY OVER $199</p>
</div>
<div className="iconChild">
<img className="icons" src={Icon4} width="50px" height="50px" alt="iconFor"/>
<p className="textIcon">2 IN 1 GOURMET ARRANGEMENTS</p>
</div>
        </div>
    )
}
export default AdvantagesIcons;
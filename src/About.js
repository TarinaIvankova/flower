import BG1 from "./images/BG1.png";
import BG2 from "./images/BG2.png";
import ShowMore from './ShowMore';

function About () {

    return (
        <div className='about3' id="about_section">
        <div className='about2'>
          <h2>ABOUT US</h2>
          </div>
          <div className='about'>
       <img className="never" src={BG1} width="250px" alt="fonabout"/>
       <ShowMore/>
    
       <img src={BG2} width="250px" alt="fonabout2"/>
       </div>
   </div>
    )
}
export default About;
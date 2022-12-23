import BG1 from "./BG1.png";
import BG2 from "./BG2.png";
import ShowMore from './ShowMore';

function About () {

    return (
        <div className='about3'>
        <div className='about2'>
          <h2>ABOUT US</h2>
          </div>
          <div className='about'>
       <img src={BG1} width="250px" alt="fonabout"/>
       <ShowMore/>
    
       <img src={BG2} width="250px" alt="fonabout2"/>
       </div>
   </div>
    )
}
export default About;
import './App.css';
import one from './one.png';
import textnew from './textnew.png';
import Footer from './Footer';
import AdvantagesIcons from './AdvantagesIcons';
import About from './About';
import OurProdact from './Bouquet';
import FollowUs from './Contact';
import Menu from './Menu';


function App() {

  return (
    
    <div>
      <Menu/>
      <img src={textnew} width="100%" alt="fon"/>
      <img src={one} width="100%" alt="fon"/>
      <AdvantagesIcons/>
      <OurProdact/>
      <About/>
      <FollowUs/>
      <Footer/>
      <p className='downsite'>Сайт создан исключительно в учебных целях, все фотографии взяты в открытых источниках в интернете и не имеют ничего общего с реальным магазином.</p>
      <p className='downsite'>Created on React</p>
      <p className='downsite'>2022 By Ivankova Tarina</p>
      <p className='downsite'>Ivankova.Tarina@gmail.com</p>
   </div>
  );
}

export default App;
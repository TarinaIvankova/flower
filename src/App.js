import './App.css';
import {
Routes,
Route
} from "react-router-dom";
import Footer from './Footer';
import AdvantagesIcons from './AdvantagesIcons';
import About from './About';
import OurProdact from './Bouquet';
import FollowUs from './Contact';
import Menu from './Menu';
import Up from './Up';
import Cart from './Cart';



function App() {

  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/' element={<Up />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    
      <Up/>
      <AdvantagesIcons/>
      <OurProdact />
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
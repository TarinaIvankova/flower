import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Footer';
import Menu from './Menu';
import Home from './Home';
import Cart from './Cart';


function App() {

  return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
      <p className='downsite'>Сайт создан исключительно в учебных целях, все фотографии взяты в открытых источниках в интернете и не имеют ничего общего с реальным магазином.</p>
      <p className='downsite'>Created on React</p>
      <p className='downsite'>2022 By Ivankova Tarina</p>
      <p className='downsite'>Ivankova.Tarina@gmail.com</p>
    </div>
  );
}

export default App;
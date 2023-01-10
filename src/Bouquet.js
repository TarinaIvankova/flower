import Buket from './Buket';
import Button from './Button.js';
import { useEffect, useState } from "react";
import { data } from './data';
import { setBouquet, setLoadedFiles } from './redux/slices/bouquet';
import { useDispatch, useSelector } from "react-redux";

function OurProdact (){
    const dispatch = useDispatch()
    // локальный список buket
    const [buket, setBuket]=useState(null);
    // получаем полный список из редакса 
    const bouquet = useSelector((state) => state.bouquet.items)
    // получаем флаг из редакса
    const loadedFiles = useSelector((state) => state.bouquet.loadedFiles)

    useEffect(() => {
      // если флаг не устновлен, загружаем данные в редакс и ставим флаг. Сохранится в redux-persist
      // без этого флага useEffect будет срабатывать при каждом обновлении страницы и перезаписывать данные на начальные
      if(!loadedFiles) {
        dispatch(setBouquet(data))
        dispatch(setLoadedFiles(!loadedFiles))
      }
    }, [dispatch, loadedFiles])

    // передаём в список зависимостей bouquet, чтобы когда он менялся перезаписывался buket
    // который мы дальше будем использовать
    useEffect(() => {
      setBuket(bouquet)
    }, [bouquet])

    const Bouquet=(name)=>{
      // const newBuket=data.filter(element=>element.name===name);
      const newBuket=bouquet.filter(element=>element.name===name);
    setBuket(newBuket);
    }

    return (
        <div id="bouquet_section">
<div>
        <div className='ourBouquets'>
        <h2 className='formobil'>Our bouquets and gifts</h2>
        </div>
      <Button 
        chosenBuket={Bouquet}
        // data={data}
        data={bouquet}
        setBuket={setBuket}
      />
      </div>
      {/* buket изначально null, как только сработает useEffect отрисуется и компонент с локальным списком buket */}
      {buket &&
        <Buket itemsForSale={buket}/>
      }
    </div>

    )
}
export default OurProdact;
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { 
    setBouquet
} from "./redux/slices/bouquet";



function Buket ({itemsForSale, type}){
    const dispatch = useDispatch()
    // локальный список buket
    const [itemsForSaleLocal, setItemsForSaleLocal] = useState(null)
    const [allPrice, setAllPrice] = useState(null)

    useEffect(() => {
       
        if(itemsForSaleLocal) {
            // объявляем переменную для общей суммы
            let number = 0
            // будем перебирать список и складывать сумму в переменную
            itemsForSaleLocal.map((item) => {
                number += item.price * item.number
                return number
            })
            setAllPrice(number)
        }
    }, [itemsForSaleLocal])

    useEffect(() => {
        // установим локальный список
        setItemsForSaleLocal(itemsForSale)
        // если тип корзина, устанавливаем в локальный список только добавленые элементы
        if(type && type === "cart") {
            setItemsForSaleLocal(itemsForSale.filter(element=>element.number!==0))
        }
        // изменяется переменная в списке зависимостей - useEffect срабатывает снова
    }, [itemsForSale, type])

    const setIncreaseBouquetHandler = (bouquetId) => {
        // добавление. Перебирает список и изменит только тот элемент, у которого id совпадает с выбранным при onClick
        const itemsLocal = itemsForSale.map((item) => {
            if(item.id === bouquetId) {
                // ...item извлекает все свойства, number перезапишет старый, {} соберёт всё обратно в объект
                return {...item, number: item.number + 1}
            } else {
                return item
            }
        })
        dispatch(setBouquet(itemsLocal))
    }

    const setDecreaseBouquetHandler = (bouquetId) => {
        const itemsLocal = itemsForSale.map((item) => {
            if(item.id === bouquetId && item.number !== 1 && type && type === "cart") {
                return {...item, number: item.number - 1}
            } else if(item.id === bouquetId && item.number === 1 && type && type === "cart") {
                return {...item, number: 1}
            } else if(item.id === bouquetId && !type) {
                return {...item, number: item.number - 1}
            } else {
                return item
            }
        })
        dispatch(setBouquet(itemsLocal))
    }

    const setDeleteBouquetHandler = (bouquetId) => {
        const itemsLocal = itemsForSale.map((item) => {
            if(item.id === bouquetId) {
                return {...item, number: 0}
            } else {
                return item
            }
        })
        dispatch(setBouquet(itemsLocal))
    }

    return (
        <div>
            <div className="products">
            {/* если itemsForSaleLocal уже не null и у этого массива есть количество элементов, то отображаем их */}
            {/* иначе блок с надписью Корзина пуста */}
            {/* конструкция "x ? y : z" */}
            {itemsForSaleLocal && itemsForSaleLocal.length ? itemsForSaleLocal.map((element=>{
                const{id, photo, name1, price, cart, number}=element;
                return (
                <div className="product-card" key={id}>
                    <img className="photoFlower" src={photo} width="300px" height="300px" alt="bukets"/>
                <div className="product-info">
                    <h3>{name1} </h3>
                    <h3>  $ {price}</h3>
                    <div className="aaa">
                        {number !== 0 &&
                        
                            <div className="product-elements">pcs:
                                <div className="product-plus" onClick={() => setIncreaseBouquetHandler(id)}>
                                    <div className="product-mark product-mark--vertical"></div>
                                    <div className="product-mark product-mark--horizontal"></div>
                                </div>
                                <div className="product-number">
                                    {number}
                                </div>
                                <div className="product-minus" onClick={() => setDecreaseBouquetHandler(id)}>
                                    <div className="product-mark product-mark--horizontal"></div>
                                </div>  
                            </div>
                        }
                        {type && type === "cart" ?
                            <div className="deleteButton" onClick={() => setDeleteBouquetHandler(id)}> х</div> :
                            <button className="logoCart" onClick={() => setIncreaseBouquetHandler(id)}>
                                <img src={cart} width="30px" alt="logoCart"></img>
                            </button>
                        }
                    </div>
                </div>
                </div>
                )
            })) : <div className="cartIsNull">
                The shopping cart is empty</div>}
        </div>
        {allPrice !== 0 && <div className="all-cost">TOTAL PRICE: $ {allPrice}</div>}
        </div>)
        
}
export default Buket;
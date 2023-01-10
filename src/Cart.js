import Menu from "./Menu";
import { useSelector } from "react-redux";
import Buket from "./Buket";

function Cart() {
    const bouquet = useSelector((state) => state.bouquet.items)

    return(
        <div>
            <Menu/>
            {/* <h1>Test</h1> */}
            {/* задаём тип компонента Buket для фильтрации элементов в корзине */}
            <Buket itemsForSale={bouquet} type="cart"/>
        </div>
    )
}
export default Cart;
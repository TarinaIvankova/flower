function Buket ({itemsForSale}){
    return (
    <div className="products">
        {itemsForSale.map((element=>{
            const{id, photo, name1, price, cart}=element;
            return (
            <div className="product-card" key={id}>
                <img className="photoFlower" src={photo} width="300px" height="300px" alt="bukets"/>
            <div className="product-info">
                <h3>{name1} </h3>
                <h3>  $ {price}</h3>
                <div className="aaa">
                <button className="logoCart"><img src={cart} width="30px" alt="logoCart"></img></button>
                </div>
            </div>
            </div>
         
            )
        }))}
    </div>)
}
export default Buket;
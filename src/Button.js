

function Button({chosenBuket, data, setBuket}) {
   


    return(
        <div className="btn-container">
            <button className="btn" onClick={() => setBuket(data)}>ALL</button>
            <button className="btn" onClick={() => chosenBuket('Premium bouquet')}>PREMIUM</button>
            <button className="btn" onClick={() => chosenBuket('Vip bouquet')}>VIP</button>

        </div>
    )
  }
  
  export default Button;
import Pay from "./Payments.png";

function Footer () {

    return (
<div className="footer">
<div className="footerChild">
    <p>Delivety & Pick Up</p>
    <p>FAQ</p>
    <p>Privacy Policy</p>
    <p>Corporate gifts</p>
    <p>Terms Of Service</p>
</div>
<div className="footerChild">
    <p>@fictitious address</p>
    <p>fictitious.add@gmail.com</p>
    <p>+6143452675</p>
    <p>Pick Up Address:</p>
    <p>fictitious Avenue, 2124</p>
</div>
<div className="footerChild">
<img className='down1' src={Pay} width="100px" alt="fondown"/>
</div>
</div>
    )
}
export default Footer;
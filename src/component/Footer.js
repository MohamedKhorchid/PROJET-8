import websiteLogo1 from "../images/Vector.png"
import websiteLogo2 from "../images/Group.png"
import websiteLogo3 from "../images/Vector (1).png"
import websiteLogo4 from "../images/Vector (2).png"

function Footer(){
    return(
        <div className="footer">
            <div className="footer__image__text">
                <div className="footer__image__block">
                    <img className="footer__image__K" src={websiteLogo1}></img>
                    <img className="footer__image__M" src={websiteLogo2}></img>
                    <img className="footer__image__S" src={websiteLogo3}></img>
                    <img className="footer__image__A" src={websiteLogo4}></img>
                </div>
            
                <span className="footer__text">&copy; 2020 Kasa.All rights reserved</span>
            </div>
        </div>
    )

}
export default Footer ;
import webSiteLogo from "../images/LOGO.png"
import { NavLink } from "react-router-dom";

function Logo(){
    return( 
        <div>
        <NavLink to="/"><img src={webSiteLogo}className="navigation__logo"></img></NavLink>
        </div>
    )
}

export default Logo;

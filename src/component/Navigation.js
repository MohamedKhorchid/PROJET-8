import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <ul className="navigation__menu">
        <NavLink to="/"className={(nav)=>(nav.isActive? "navigation__menu__item__active" : "")}> <li className="navigation__menu__item">Accueil</li></NavLink>
            <NavLink to="/About"className={(nav)=>(nav.isActive? "navigation__menu__item__active" : "")} ><li className="navigation__menu__item">A propos</li></NavLink>
        </ul>
    )
}
export default Navigation ;

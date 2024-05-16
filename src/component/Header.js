import Navigation from "./Navigation";
import Logo from "./Logo";

function Header(){
    return(
        <div className="navigation">
            <Logo/>  
            <Navigation/>
        </div>
    )
}

export default Header;

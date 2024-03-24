import { NavLink } from "react-router-dom";
function ErrorContent(){
    return(
        <div>
             <div className="error">
                <span className="error__404">404</span>
                <span className="error__text">Oups ! La page que vous demandez n'existe pas.</span>
                <NavLink to="/"><span className="error__redirect">Retournez sur la page d'accueil</span></NavLink>
            </div>
        </div>
    )
}

export default ErrorContent ;
import information from "../data/information.json"
import { NavLink } from "react-router-dom"

function Red() {
    return(
        <div className="red__box__div">
            {information.map((data) => (
                <div className="red__box" key={data.id}>
                    <NavLink to={`/card/${data.id}`}>
                        <img src={data.cover} alt={data.title} className="red__box__image"></img>
                        <span className="red__box__name">{data.title}</span>
                    </NavLink>
                </div>
            ))} 
        </div>
    )
}

export default Red;
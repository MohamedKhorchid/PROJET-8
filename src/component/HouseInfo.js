import { useParams } from "react-router-dom";
import informations from "../data/information.json"
import ErrorContent from "./ErrorContent";
import Collapse from "./Collapse";

function HouseInfo() {
    const {id} = useParams()
    const data = informations.find(data => data.id === id)


    if(data === undefined){
        return(
            <div>
                <ErrorContent/>
            </div>
        )
    } else {
        return(
            <div>
                <div className="house">
                    <div className="house__info"> 
                        <p className="house__info__title">{data.title}</p>
                        <p className="house__info__location">{data.location}</p>
                    </div>

                    <div className="house__host">
                        <p className="house__host__name">{data.host.name}</p>
                        <img className="house__host__picture" src={data.host.picture}></img>
                    </div>

                    <div className="house__tags">
                        {data.tags.map((tag) => (
                            <button className="house__tags__tag">{tag}</button>
                        ))}
                    </div>

                    <div className="house__description__equipments">
                        <Collapse 
                            divClassName="house__description"
                            title="Description"
                            titleClassName="house__description__equipments__title"
                            content={
                                <div className="house__description__equipments__box">
                                    <span className="house__description__equipments__text">{data.description}</span>
                                </div>
                            }>
                        </Collapse>
                        <Collapse
                            divClassName="house__equipments"
                            title="Equipements"
                            titleClassName="house__description__equipments__title"
                            content={
                                <div className="house__description__equipments__box">
                                    {data.equipments.map((equipment) => 
                                        <p className="house__description__equipments__text">{equipment}</p>
                                    )}
                                </div>
                            }>   
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default HouseInfo;
import informations from "../data/information.json"
import ErrorContent from "./ErrorContent"
import { useParams } from "react-router-dom"
import arrowRight from "../images/Vectorarrowright.png"
import arrowLeft from "../images/Vectorarrowleft.svg"
import { useState } from "react"

function Caroussel() {
    const {id} = useParams()
    const data = informations.find(data => data.id === id)

    const [position, setPosition] = useState(0)

    function showNext() {
        setPosition(position + 1)
        if(position + 1 > data.pictures.length - 1){
            setPosition(0)
        }
    }

    function showPrevious() {
        setPosition(position - 1)
        if(position - 1 < 0) {
            setPosition(data.pictures.length - 1)
        }
    } 


    if(data === undefined){
        return(
            <div>
                <ErrorContent/>
            </div>
        )
    } else {
        return(
            <div className="caroussel__box">
                <div className="caroussel">
                    {data.pictures.length > 1 && <img src={arrowLeft} className="caroussel__arrow__left" onClick={showPrevious}></img>}

                        <img src={data.pictures[position]} className="caroussel__image"></img>
            
                        {data.pictures.length > 1 && <p className="caroussel__image__number">{position + 1}/{data.pictures.length}</p>}
                        
                    {data.pictures.length > 1 && <img src={arrowRight} className="caroussel__arrow__right" onClick={showNext}></img>}
                </div>
            </div>
        )
    }  
}

export default Caroussel;
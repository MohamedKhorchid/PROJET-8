import informations from "../data/information.json"
import ErrorContent from "./ErrorContent"
import { useParams } from "react-router-dom"
import arrowRight from "../images/Vectorarrowright.png"
import arrowLeft from "../images/Vectorarrowleft.svg"

function Caroussel() {
    const {id} = useParams()
    const data = informations.find(data => data.id === id)

    let position = 0
    let textPosition = 1
    function showNext() {
        position++
        textPosition++
        if(position > data.pictures.length - 1){
            position=0
            textPosition = 1
        }
        displayImage()
    }

    function showPrevious() {
        position--
        textPosition--
        if(position < 0) {
            position = data.pictures.length - 1
            textPosition = data.pictures.length
        }  
        displayImage()
    }

    function displayImage() {
        const carousselImage = document.querySelector(".caroussel__image")
        carousselImage.setAttribute("src", data.pictures[position])

        const carousselImageNumber = document.querySelector(".caroussel__image__number")
        carousselImageNumber.innerHTML = `${textPosition}/${data.pictures.length}`
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

                        <img src={data.pictures[0]} className="caroussel__image"></img>
                        
                        {data.pictures.length > 1 && <p className="caroussel__image__number">1/{data.pictures.length}</p>}
                    {data.pictures.length > 1 && <img src={arrowRight} className="caroussel__arrow__right" onClick={showNext}></img>}
                </div>
            </div>
        )
    }  
}

export default Caroussel;
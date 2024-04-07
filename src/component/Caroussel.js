import informations from "../data/information.json"
import ErrorContent from "./ErrorContent"
import { useParams } from "react-router-dom"
import arrowRight from "../images/chevron-right.svg"
import arrowLeft from "../images/chevron-left-svgrepo-com.svg"

function Caroussel() {
    const {id} = useParams()
    const data = informations.find(data => data.id === id)

    let position = 0
    let textPosition = 1
    function showNext() {
        position++
        textPosition++
        if(position > data.pictures.length - 1){
        // là, ça signifie que si la valeur attribuée à position est supérieure à la taille du tableau pictures -1 car la taille
        // du tableau sera toujours supérieure de 1 par rapport à comment compte javascript, alors 
            position=0
            textPosition = 1
            /**ici, on précise à l'aide d'une condition que si la valeur de position est suppérieur à la valeur de la dernière image 
            * du tableau, alors position prendra la valeur de 0 (reviendra à la première image), et textPosition prendra la valeur
            * de 1 (reviendra au premier texte)
            */
        }
        displayImage()
    }

    function showPrevious() {
        position--
        textPosition--
        if(position < 0) {
            position = data.pictures.length - 1
            textPosition = data.pictures.length
            /**ici, on précise à l'aide d'une condition que si la valeur de position est inférieur à la valeur de la première image 
            * du tableau, alors position prendra la valeur de 4 (reviendra à la dernière image), et textPosition prendra la valeur
            * de 5 (reviendra au dernier texte)
            */
        }  
        displayImage()
    }

    function displayImage() {
        const carousselImage = document.querySelector(".caroussel__image")
        carousselImage.setAttribute("src", data.pictures[position])

        const carousselImageNumber = document.querySelector(".caroussel__image__number")
        carousselImageNumber.innerHTML = `${textPosition}/${data.pictures.length}`
                                        /**En français, on voudrait afficher la valeur de la variable textPosition / (sur) la valeur 
                                         * de la taille du tableau pictures contenu dans l'objet data.
                                         * Le innerHTML s'écrit entre backticks. L'utilisation des backticks permet d'appeller des
                                         * variables. Pour appeler une variable on place son nom à l'intérieur des accolades, et on
                                         * met un dollar devant les accolades. Si on ne fait pas ça, ce qu'on écrit entre les backticks
                                         * sera automatiquement interprêté comme étant du texte et sur le site ça affichera
                                         * "textPosition/data.pictures.length"
                                         */
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
                {/*
                {informations.map((data) =>(
                    <span>{data.title}</span>
                ))}
                */}

                <div className="caroussel">
                    <img src={arrowLeft} className="caroussel__arrow__left" onClick={showPrevious}></img>
                        <img src={data.pictures[0]} className="caroussel__image"></img>
                        <p className="caroussel__image__number">1/{data.pictures.length}</p>
                    <img src={arrowRight} className="caroussel__arrow__right" onClick={showNext}></img>
                </div>
            </div>
        )
    }  
}

export default Caroussel;
import Header from "../component/Header";
import Footer from "../component/Footer";
import HookAbout from "../component/HookAbout";
import Collapse from "../component/Collapse";

function About() {
    return(
        <div>
            <Header/>
            <HookAbout/>
            <Collapse 
                divClassName="about__collapse"
                title="Fiabilité" 
                titleClassName="about__collapse__title"
                content={
                    <p className="about__collapse__text">
                        Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>                
                }
                contentDivClassName="about__collapse__box">
            </Collapse>
            <Collapse 
                divClassName="about__collapse"
                title="Respect" 
                titleClassName="about__collapse__title"
                content={
                    <p className="about__collapse__text">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>            
                }
                contentDivClassName="about__collapse__box">
            </Collapse>
            <Collapse 
                divClassName="about__collapse"
                title="Service" 
                titleClassName="about__collapse__title"
                content={
                    <p className="about__collapse__text">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>                
                }
                contentDivClassName="about__collapse__box">
            </Collapse>
            <Collapse 
                divClassName="about__collapse"
                title="Sécurité" 
                titleClassName="about__collapse__title"
                content={
                    <p className="about__collapse__text">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                        chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, 
                        cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>                
                }
                contentDivClassName="about__collapse__box">
            </Collapse>
            <Footer/>
        </div>
    )
}
export default About;

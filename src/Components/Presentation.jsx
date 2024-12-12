import { Presentacion, H2, DivPresentacion, ButtonCV, IMG } from "../Styles/PresentationComponent";
import CV from "../img/CV.pdf";
import CVEN from "../img/CV-EN.pdf";
import Image from "../img/presentation.jpg"
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext";

function Presentation() {
    const { state } = useContext(LenguageContext);

    return (
        <Presentacion>
            <DivPresentacion>
                <h3>
                    {state.lenguage ? "Hola! Soy Belén" : "Hi! I'm Belén"}
                </h3>
                <H2>
                    <span className="highlight">Front</span>end <br />
                    {state.lenguage ? "Developer" : "Developer"}
                </H2>
                <p>
                    {state.lenguage ? (
                        <>Apasionada por la programación, mi enfoque principal está en el desarrollo frontend, como amante de la tecnología estoy constantemente en busca de nuevos desafíos que me permitan crecer y evolucionar en el ámbito del desarrollo web.</>
                    ) : (
                        <>Passionate about programming, my main focus is on front-end development, as a technology lover I am constantly looking for new challenges that allow me to grow and evolve in the field of web development.</>
                    )}
                </p>
                {
                    state.lenguage ? 
                    <ButtonCV>
                        <a href={CV} download="CV.pdf" className="cv">
                            Descargar CV
                        </a>
                    </ButtonCV> 
                    :
                    <ButtonCV>
                        <a href={CVEN} download="CV-EN.pdf" className="cv">
                        Download CV
                        </a>
                    </ButtonCV>
                }
            </DivPresentacion>
            <IMG src={Image} alt="" />
        </Presentacion>
    )
}

export default Presentation;

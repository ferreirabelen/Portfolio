import { DivContainer, Titulo3, DIVICONOS } from "../Styles/AboutMeComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext";

function AboutMe() {
    const { state } = useContext(LenguageContext);

    return (
        <>
            <DivContainer id="sobremi">
                <div>
                    {state.lenguage ? <Titulo3>SOBRE MÍ</Titulo3> : <Titulo3>ABOUT ME</Titulo3>}
                    <p>
                        {state.lenguage ? (
                            <>
                                
                                Soy curiosa, <span className="highlight">creativa </span> y  <span className="highlight">apasionada </span>
                                por lo que hago, por este motivo sigo aprendiendo para a futuro poder dar soluciones acordes a diferentes contextos.
                                <br />
                                <br />
                                Después de más de un año trabajando como Web Developer, disfruto enfrentando nuevos retos y 
                                viendo cómo las ideas toman forma en la pantalla. 
                                Busco seguir creciendo en un entorno donde pueda aportar y <span className="highlight">mejorar </span> cada día.
                            </>
                        ) : (
                            <>
                                 I am curious, <span className="highlight">creative </span> and <span className="highlight">passionate </span>
                                about what I do, for this reason I keep learning to be able to provide solutions to different contexts in the future.
                                <br />
                                <br />
                                After a year working as a Web Developer, I enjoy facing new challenges and seeing how ideas take shape 
                                on the screen. I look forward to continue growing in an environment 
                                where I can contribute and <span className="highlight">improve </span> every day.
                            </>
                        )}
                        {state.lenguage ? <h3>Si les interesó mi perfil ¡Contacteme! </h3> : <h3> If you are interested in my profile Contact me! </h3>}
                        <DIVICONOS>
                            <a href="https://github.com/ferreirabelen" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="mailto:ferreirabelenn@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                            <a href="https://www.linkedin.com/in/belenferreira21/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </DIVICONOS>
                    </p>
                </div>
            </DivContainer>
        </>
    );
}

export default AboutMe;


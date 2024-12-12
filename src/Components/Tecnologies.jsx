import {Titulo3,DIV,DivContainer} from "../Styles/TecnologiesConponent"
import html from "../img/html.jpg"
import css from "../img/csss.png"
import react from "../img/react.png"
import styled from "../img/styled.png"
import git from "../img/git.png"
import github from "../img/github.svg"
import js from "../img/js.png"
import node from "../img/node.png";
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

function Tecnologies(){
    const {state} = useContext(LenguageContext);

    return(
        <DIV>
        {state.lenguage ? <Titulo3 id="skills">TECNOLOGIAS</Titulo3> : <Titulo3 id="skills">TECNOLOGIES</Titulo3>}
        <DivContainer>
            <div>
            <h3>HTML</h3>
            <img src={html} alt="" />
            </div>

            <div>
            <h3>CSS</h3>
            <img src={css} alt="" />
            </div>

            <div>
            <h3>STYLED-COMPONENTS</h3>
            <img src={styled} alt="" />
            </div>

            <div>
            <h3>JAVASCRIPT</h3>
            <img src={js} alt="" />
            </div>

            <div>
            <h3>REACT</h3>
            <img src={react} alt="" />
            </div>

            <div>
            <h3>NODE</h3>
            <img src={node} alt="" />
            </div>


            <div>
            <h3>GIT</h3>
            <img src={git} alt="" />
            </div>

            <div>
            <h3>GITHUB</h3>
            <img src={github} alt="" />
            </div>

        </DivContainer>
        </DIV>
    )
}

export default Tecnologies;
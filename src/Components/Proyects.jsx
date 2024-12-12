import {Titulo3,DIV,DivContainer, Button} from "../Styles/ProyectsComponent";
import diseño1 from "../img/diseño1.png";
import diseño2 from "../img/diseño2.png";
import portfolio from "../img/portfolio.png";
import bamedia from "../img/bamedia.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

const proyectos = [
    {
        id: 1,
        img: bamedia,
        repo: "https://github.com/lucastgl/ba.media-website",
        demo: "https://bamedia.netlify.app/",
        descriptionES: "Ba-Media fue mi primer proyecto freelance, utilicé herramientas como React + Vite, y en los estilos Styled-Component, fue un proyecto de un mes de trabajo.",
        descriptionEN: "Ba-Media was my first freelance project. I used tools like React + Vite, and Styled-Components for styling. It was a one-month project."
    },
    {
        id: 2,
        img: diseño2,
        repo: "",
        demo: "https://mariaolivarezsellshomes.com/",
        descriptionES: "En este proyecto, personalicé una página web basada en un template estándar para convertirla en una representación única de la marca del cliente. Trabajé en la selección de colores, tipografías y diseño, asegurándome de reflejar la personalidad y estética de la clienta, una agente inmobiliaria.",
        descriptionEN: "In this project, I customized a web page based on a standard template to make it a unique representation of the client's brand. I worked on selecting colors, typography, and design to reflect the client's personality and aesthetics as a real estate agent."
    },
    {
        id: 3,
        img: diseño1,
        repo: "",
        demo: "https://greyduckproperties.com/",
        descriptionES: "En este proyecto, personalicé una página web basada en un template estándar para convertirla en una representación única de la marca del cliente. Trabajé en la selección de colores, tipografías y diseño, asegurándome de reflejar la personalidad y estética del team inmobiliario.",
        descriptionEN: "In this project, I customized a web page based on a standard template to make it a unique representation of the client's brand. I worked on selecting colors, typography, and design to reflect the real estate team's personality and aesthetics."
    },
    {
        id: 4,
        img: portfolio,
        repo: "",
        demo: "",
        descriptionES: "Mi Portfolio",
        descriptionEN: "My Portfolio"
    }
];

function Proyects() {
    const { state } = useContext(LenguageContext);

    return (
        <>
            {state.lenguage ? <Titulo3>Proyectos</Titulo3> : <Titulo3>Projects</Titulo3>}
            <DIV id="proyectos">
                {
                    proyectos.map((proyecto) => (
                        <DivContainer key={proyecto.id}>
                            <img src={proyecto.img} alt="" />
                            <div>
                                <p>{state.lenguage ? proyecto.descriptionES : proyecto.descriptionEN}</p>
                            </div>
                            {state.lenguage 
                                ? <a href={proyecto.demo} target="_blank"><Button>Página Web</Button></a> 
                                : <a href={proyecto.demo} target="_blank"><Button>Website</Button></a>}
                        </DivContainer>
                    ))
                }
            </DIV>
        </>
    );
}

export default Proyects;

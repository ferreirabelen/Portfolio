import { DivEducacion, Spanfecha, Container, DivWork, H2 } from "../Styles/WorkComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext";

function Work() {
    const { state } = useContext(LenguageContext);

    return (
        <Container>
            <DivWork>
                <>
                    <H2>{state.lenguage ? "Experiencia" : "Experience"}</H2>
                    <h3>
                        <span><FontAwesomeIcon icon={faLaptopCode} /> </span>
                        {state.lenguage ? "Luxury Presence" : "Luxury Presence"}
                    </h3>
                    <h4>{state.lenguage ? "Web Developer" : "Web Developer"}</h4>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: state.lenguage
                                ? "• Desarrollo y personalización de sitios web para diversos clientes mediante el Dashboard de la empresa. <br /> • Implementación de código CSS y HTML para la elaboración y ajuste de distintos elementos y funcionalidades."
                                : "• Development and customization of websites for various clients using the company's Dashboard. <br /> • Implementation of CSS and HTML code to create and adjust different elements and features."
                        }}
                    />
                    {state.lenguage ? "Septiembre 2023 - Octubre 2024" : "September 2023 - October 2024"}

                    <h3>
                        <span><FontAwesomeIcon icon={faLaptopCode} /> </span>
                        {state.lenguage ? "BA Media" : "BA Media"}
                    </h3>
                    <h4>{state.lenguage ? "Frontend Developer" : "Frontend Developer"}</h4>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: state.lenguage
                                ? "Fue un proyecto Freelancer, creé una Landing Page utilizando React como lenguaje de programación y Styled-component para el estilado."
                                : "It was a freelance project, I created a Landing Page using React as the programming language and Styled-components for styling."
                        }}
                    />
                    {state.lenguage ? "Julio 2023 - Septiembre 2023" : "July 2023 - September 2023"}
                </>
            </DivWork>
            <DivEducacion>
                <>
                    <H2>{state.lenguage ? "Educación" : "Education"}</H2>
                    <h5>
                        <Spanfecha><FontAwesomeIcon icon={faCheckCircle} /> </Spanfecha>
                        {state.lenguage ? "Certified Tech Developer en Digital House" : "Certified Tech Developer in Digital House"}
                    </h5>
                    {state.lenguage ? "Octubre 2021 - Julio 2023" : "October 2021 - July 2023"}
                    <h5>
                        <Spanfecha><FontAwesomeIcon icon={faCheckCircle} /> </Spanfecha>
                        {state.lenguage ? "Curso de React en Coder House" : "React Course in Coder House"}
                    </h5>
                    {state.lenguage ? "Mayo 2022 - Julio 2022" : "May 2022 - July 2022"}
                </>
            </DivEducacion>
        </Container>
    );
}

export default Work;

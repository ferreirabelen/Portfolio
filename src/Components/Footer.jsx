import { DivFinal, DIV } from "../Styles/FooterComponent";
import { useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext"; 

function Footer() {
    const {state} = useContext(LenguageContext);

    return (
    
        <DIV>
            <DivFinal>
                {state.lenguage ? <p> ©2023 Hecho por Belén Ferreira.</p> : <p> ©2023 made by Belen Ferreira.</p>}
         </DivFinal>
        
        </DIV> 
    );
}

export default Footer;


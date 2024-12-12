
import './App.css'
import NavBar from "../../portfolio/src/Components/NavBar"
import Presentation from "../../portfolio/src/Components/Presentation"
import AboutMe from "../../portfolio/src/Components/AboutMe"
import Proyects from "../../portfolio/src/Components/Proyects";
import Work from './Components/Work';
import Footer from "../../portfolio/src/Components/Footer";
import Tecnologies from './Components/Tecnologies';
import LenguageContextProvider from "../src/Components/Context/LenguageContext"; 

function App() {
  return (
    <LenguageContextProvider>
    
      <NavBar/>
      <Presentation/>
      <Proyects/>
      <Work/>
      <Tecnologies/>
      <AboutMe/>
      <Footer/>
    </LenguageContextProvider>
  )
}

export default App

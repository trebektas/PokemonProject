import "./HomeMain.css";
import AboutNavBar from "../components/AboutNavBar";
import About from "./about/About";
import History from "./about/History";
import Name from "./about/Name";
import Concept from "./about/Concept";

function HomeMain() {
  return (
    <div className="HomeMain">
      <AboutNavBar />
      <About />
      <History />
      <Name />
      <Concept />
    </div>
  );
}

export default HomeMain;

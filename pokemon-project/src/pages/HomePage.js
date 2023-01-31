import "./HomePage.css";
import AboutNavBar from "../components/AboutNavBar";
import About from "../components/about/About";
import History from "../components/about/History";
import Name from "../components/about/Name";
import Concept from "../components/about/Concept";

function HomePage() {
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

export default HomePage;

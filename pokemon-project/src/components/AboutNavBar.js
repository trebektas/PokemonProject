import navCompanyLogo from "../assets/nav-company-logo.png";

function AboutNavBar() {
  return (
    <nav className="AboutNavBar">
      <img src={navCompanyLogo} alt="The Pokemon Company International"></img>
      <div className="Nav-Links">
        <a href="#About">About</a>
        <a href="#History">History</a>
        <a href="#Name">Name</a>
        <a href="#Concept">Concept</a>
      </div>
    </nav>
  );
}

export default AboutNavBar;

import "./topbar.scss";
import Person from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            logo.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91-8248019129</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>manuvikashs@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

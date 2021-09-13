import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Engineer", "Fighter pilot"],
      typeSpeed: 150,
      backSpeed: 75,
      backDelay: 1000,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/troll.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Manuvikash</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" />
        </a>
      </div>
    </div>
  );
}

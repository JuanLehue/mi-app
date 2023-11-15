import React from "react";
import "./MiFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./img/LogoBlanco.png";

function MiFooter() {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="/">
              <img src={Logo} alt="logo" className="logo" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            nobis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            nobis.
          </p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="social">
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; 2023 <b>Juan Lehue</b>
        </small>
      </div>
    </footer>
  );
}

export default MiFooter;

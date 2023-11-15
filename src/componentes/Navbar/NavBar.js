import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Logo from "./img/LogoBlanco.png";

function NavBar() {
  return (
    <>
      <div className="NavContainer">
        <div>
          <Link to="/" className="item">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        <img src={Logo} alt="logo" className="logo" />
        <div>
          <Link to="/login" className="item">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/carrito" className="item">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;

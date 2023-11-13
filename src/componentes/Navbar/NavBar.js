import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHome,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function NavBar() {
  return (
    <>
      <div className="NavContainer">
        <div>
          <Link to="/" className="item">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/listaProductos" className="item">
            <FontAwesomeIcon icon={faShirt} />
          </Link>
        </div>
        <h2>Logo</h2>
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

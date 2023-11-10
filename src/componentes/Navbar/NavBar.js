import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="NavContainer">
        <div>
          <Link to="/">Home</Link>
          <Link to="/listaProductos">Products</Link>
        </div>
        <h2>Logo</h2>
        <div>
          <Link>Carrito</Link>
          <Link to="/login">Usuario</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;

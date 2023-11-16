import React from "react";
import NavBar from "../Navbar/NavBar";
import "./carrito.css";
import MiFooter from "../Footer/MiFooter";

function Carrito() {
  return (
    <>
      <NavBar />
      <div className="container-carrito">
        <h2 className="title-carrito">Proximamente...</h2>
      </div>
      <MiFooter />
    </>
  );
}

export default Carrito;

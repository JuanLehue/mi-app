import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/listaProductos">Lista de Productos</Link>
            <Link to="/registrarse">Registrarse</Link>
        </nav>
    )
}

export default NavBar;
import React from "react";
import "./ListaProductos.css";
import NavBar from "../Navbar/NavBar";
import { Link } from "react-router-dom";

function ListaProductos(){
    return(
        <>
        <NavBar/>
        <div className="contenedor">
            <h2 className="titulo">Lista Productos</h2>
            <div>
                <Link to="/detallesProducto">Remera</Link>
            </div>
        </div>
        </>
    )
}

export default ListaProductos
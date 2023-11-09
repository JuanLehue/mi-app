import React, { useEffect, useState } from "react";
import "./ListaProductos.css";
import NavBar from "../Navbar/NavBar";
import { Link } from "react-router-dom";

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />
      <header>
        <h2>Lista Productos</h2>
      </header>
      {loading ? (
        <p>Cargando Productos...</p>
      ) : (
        <ul className="listaProductos">
          {productos.map((producto) => (
            <li key={producto.id} className="item">
              <Link
                className="container-img"
                to={`/detallesProductos/${producto.id}`}
              >
                <img
                  className="img"
                  src={producto.image}
                  alt="imagen-producto"
                />
              </Link>
              <div className="info">
                <h3>{producto.title}</h3>
                <p>${producto.price}</p>
                <Link
                  to={`/detallesProductos/${producto.id}`}
                  className="boton"
                >
                  Ver Detalles
                </Link>
              </div>
            </li>
          ))}
          ;
        </ul>
      )}
      ;
    </>
  );
}

export default ListaProductos;

import React, { useEffect, useState } from "react";
import "./home.css";
import NavBar from "../Navbar/NavBar";
import { Link } from "react-router-dom";
import MiFooter from "../Footer/MiFooter";

function Home() {
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
      <div className="container-home">
        <div className="banner">
          <div className="container-inicio">
            <h2 className="title-home">Bienvenido</h2>
            <p className="descripcion-home">Descripcion</p>
          </div>
        </div>
        <div className="container-info-lista">
          <h2 className="title-listaProducto">Productos</h2>
        </div>
        {loading ? (
          <p>Cargando Productos...</p>
        ) : (
          <ul className="listaProductos">
            {productos.map((producto) => (
              <li key={producto.id} className="producto">
                <Link
                  className="container-img-producto"
                  to={`/detallesProductos/${producto.id}`}
                >
                  <img
                    className="img"
                    src={producto.image}
                    alt="imagen-producto"
                  />
                </Link>
                <div className="info">
                  <div className="info-text">
                    <h3>{producto.title}</h3>
                    <p>${producto.price}</p>
                  </div>
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
      </div>
      <MiFooter />
    </>
  );
}

export default Home;

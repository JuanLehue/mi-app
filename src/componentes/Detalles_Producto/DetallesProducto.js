import React, { useEffect, useState } from "react";
import "./DetallesProducto.css";
import NavBar from "../Navbar/NavBar";
import { useParams, Link } from "react-router-dom";
import MiFooter from "../Footer/MiFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function DetallesProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container-cargando">
        <h2 className="title-cargando">Cargando...</h2>
      </div>
    );
  } else {
    return (
      <>
        <NavBar />
        <div className="container-detallesProducto">
          <div className="container-title">
            <h2>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="flecha-detalles"
                />
              </Link>{" "}
              {producto.title}{" "}
            </h2>
          </div>
          <main className="detallesProducto">
            <div className="container-img-detalles">
              <img className="img" src={producto.image} alt="imagen-producto" />
            </div>
            <div className="container-info-detalles">
              <div className="container-price">
                <span>${producto.price}</span>
              </div>
              <div className="container-details">
                <div className="form-group">
                  <label for="colour">Color</label>
                  <select name="colour" id="colour">
                    <option disabled selected value="">
                      Escoge una opcion
                    </option>
                    <option value="rojo">Rojo</option>
                    <option value="blanco">Blanco</option>
                    <option value="beige">Beige</option>
                  </select>
                </div>
              </div>
              <div className="container-add-cart">
                <div className="container-quantity">
                  <input
                    type="number"
                    placeholder="1"
                    value="1"
                    min="1"
                    className="input-quantity"
                  />
                </div>
                <button className="btn-add-to-cart">Añadir al carrito</button>
              </div>
              <div className="container-description">
                <div className="title-description">
                  <h4>Descripcion</h4>
                </div>
                <div className="text-description">
                  <p>{producto.description}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
        <MiFooter />
      </>
    );
  }
}

export default DetallesProducto;

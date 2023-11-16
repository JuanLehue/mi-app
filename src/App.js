import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componentes/Home/home";
import DetallesProducto from "./componentes/Detalles_Producto/DetallesProducto";
import Registrarse from "./componentes/registrarse/registrarse";
import Login from "./componentes/Login/login";
import Carrito from "./componentes/carrito/carrito";

function App() {
  return (
    <>
      <BrowserRouter basename="mi-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detallesProductos/:id" element={<DetallesProducto />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

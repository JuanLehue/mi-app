import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componentes/Home/home";
import ListaProductos from "./componentes/Lista_Productos/ListaProductos";
import DetallesProducto from "./componentes/Detalles_Producto/DetallesProducto";
import Registrarse from "./componentes/registrarse/registrarse";

function App() {
  return (
    <>
      <BrowserRouter basename="mi-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listaProductos" element={<ListaProductos />} />
          <Route path="/detallesProductos/:id" element={<DetallesProducto />} />
          <Route path="/registrarse" element={<Registrarse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

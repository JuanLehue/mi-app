import React from "react";
import NavBar from "../Navbar/NavBar";
import "./login.css";
// import { useForm } from "react-hook-form";

function Login() {
  return (
    <>
      <NavBar />
      <div className="container">
        <form>
          <h2>Iniciar Sesion</h2>
        </form>
      </div>
    </>
  );
}

export default Login;

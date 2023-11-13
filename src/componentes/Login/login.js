import React from "react";
import NavBar from "../Navbar/NavBar";
import "./login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="flecha" />
          </Link>
          <h2>Iniciar Sesion</h2>
          <label>Email</label>
          <input
            type="email"
            {...register(
              "email",
              { required: true },
              { pattern: /\S+@\S+\.\S+/ }
            )}
          ></input>
          <label>Contaseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
          ></input>
          {(errors.email?.type === "required" && (
            <p className="error-msg">Completa todos los campos</p>
          )) ||
            (errors.password?.type === "required" && (
              <p className="error-msg">Completa todos los campos</p>
            ))}
          <input type="submit" value="Enviar" className="btn-enviar" />
          <Link to="/registrarse">Registrarse</Link>
        </form>
      </div>
    </>
  );
}

export default Login;

import React from "react";
import NavBar from "../Navbar/NavBar";
import "./login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MiFooter from "../Footer/MiFooter";

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
      <div className="container-login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="flecha" />
          </Link>
          <h2>Iniciar Sesion</h2>
          <label>Email</label>
          <input
            className="campo"
            type="email"
            {...register(
              "email",
              { required: true },
              { pattern: /\S+@\S+\.\S+/ }
            )}
          ></input>
          <label>Contaseña</label>
          <input
            className="campo"
            type="password"
            {...register("password", { required: true })}
          ></input>
          {(errors.email?.type === "required" && (
            <p className="error-msg">Completa todos los campos</p>
          )) ||
            (errors.password?.type === "required" && (
              <p className="error-msg">Completa todos los campos</p>
            ))}
          <input type="submit" value="Enviar" className="btn-enviar-login" />
          <Link className="btn-registrarse" to="/registrarse">
            Registrarse
          </Link>
          <Link className="btn-registrarse" to="">
            Olvidaste tu contraseña?
          </Link>
        </form>
      </div>
      <MiFooter />
    </>
  );
}

export default Login;

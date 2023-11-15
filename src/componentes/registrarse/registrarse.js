import React from "react";
import "./registrarse.css";
import NavBar from "../Navbar/NavBar";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MiFooter from "../Footer/MiFooter";

function Registrarse() {
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
      <div className="container-register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowLeft} className="flecha" />
          </Link>
          <h2>Registrarse</h2>
          <label>Nombre</label>
          <input
            className="campo"
            type="text"
            {...register("nombre", { required: true })}
          />
          <label>Email</label>
          <input
            className="campo"
            type="email"
            {...register(
              "email",
              { required: true },
              { pattern: /\S+@\S+\.\S+/ }
            )}
          />
          <label>Contraseña</label>
          <input
            className="campo"
            type="password"
            {...register("password", { required: true })}
          />
          <div>
            <input
              className="checkbox-register"
              type="checkbox"
              {...register("condiciones", { required: true })}
            />
            <label className="checkbox-label">
              Acepto Terminos y Condiciones
            </label>
          </div>
          {errors.condiciones?.type === "required" && (
            <p className="error-msg">Campo obligatorio</p>
          )}
          <div>
            <input
              className="checkbox-register"
              type="checkbox"
              {...register("noticias")}
            />
            <label className="checkbox-label">
              Quiero recibir noticias nuevas
            </label>
          </div>
          {(errors.nombre?.type === "required" && (
            <p className="error-msg">Completa todos los campos</p>
          )) ||
            (errors.email?.type === "required" && (
              <p className="error-msg">Completa todos los campos</p>
            )) ||
            (errors.password?.type === "required" && (
              <p className="error-msg">Completa todos los campos</p>
            ))}
          <div className="container-btn-enviar">
            <input type="submit" value="Enviar" className="btn-enviar" />
          </div>
        </form>
      </div>
      <MiFooter />
    </>
  );
}

export default Registrarse;

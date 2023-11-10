import "./registrarse.css";
import NavBar from "../Navbar/NavBar";
import { useForm } from "react-hook-form";

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
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Registrarse</h2>
          <label>Nombre</label>
          <input type="text" {...register("nombre", { required: true })} />
          <label>Email</label>
          <input
            type="email"
            {...register(
              "email",
              { required: true },
              { pattern: /\S+@\S+\.\S+/ }
            )}
          />
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          <div>
            <input
              type="checkbox"
              {...register("condiciones", { required: true })}
            />
            <label>Acepto Terminos y Condiciones</label>
            {errors.condiciones?.type === "required" && (
              <p className="error-msg">Campo obligatorio</p>
            )}
          </div>
          <div>
            <input type="checkbox" {...register("noticias")} />
            <label>Quiero recibir noticias nuevas</label>
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
          <input type="submit" value="Enviar" className="btn-enviar" />
        </form>
      </div>
    </>
  );
}

export default Registrarse;

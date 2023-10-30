import React from "react";
import "./registrarse.css";
import NavBar from "../Navbar/NavBar";

class registrarse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Hola " +
        this.state.value +
        ", el registro se completo correctamente. Gracias!!"
    );
    event.preventDefault();
  }

  render() {
    return (
      <>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <div name="error_nombre"></div>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

// function registrarse() {
//   return (
//     <>
//       <NavBar />
//       <form class="form_contacto" onsubmit={obtenerDatos()}>
//         <div className="mb-3">
//           <label className="form-label">Nombre *</label>
//           <input
//             type="text"
//             className="form-control"
//             id="nombre"
//             name="nombre"
//             onkeyup={validar(this)}
//           />
//           <div id="error_nombre" className="error_message">
//             {" "}
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Apellido *</label>
//           <input
//             type="text"
//             className="form-control"
//             id="apellido"
//             name="apellido"
//             onkeyup={validar(this)}
//           />
//           <div id="error_apellido" className="error_message">
//             {" "}
//           </div>
//         </div>
//         <div className="mb-3">
//           <label class="form-label">Email *</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             onkeyup={validar(this)}
//           />
//           <div id="error_email" className="error_message">
//             {" "}
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Contraseña *</label>
//           <textarea
//             className="form-control"
//             id="contraseña"
//             name="contraseña"
//             rows="3"
//             onkeyup={validar(this)}
//           ></textarea>
//           <div id="error_asunto" className="error_message">
//             {" "}
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           id="botonEnviar"
//           name="botonEnviar"
//           disabled
//         >
//           Enviar
//         </button>
//       </form>
//     </>
//   );
// }

// function validar(elem) {
//   const value = elem.value;
//   const name = elem.name;

//   if (value === "") {
//     document.getElementById("error_" + name).innerHTML =
//       "Este campo es obligatorio";
//   } else {
//     document.getElementById("error_" + name).innerHTML = "";
//   }
//   confirmar();
// }

// function confirmar() {
//   const nombre = document.getElementById("nombre").value;
//   const apellido = document.getElementById("apellido").value;
//   const email = document.getElementById("email").value;
//   const contraseña = document.getElementById("contraseña").value;

//   if (nombre && apellido && email && contraseña !== "") {
//     document.getElementById("botonEnviar").disabled = false;
//   }
// }

// const getMensaje = () => {
//   const http = new XMLHttpRequest();
//   http.onreadystatechange = () => {
//     if (http.readyState === 4 && http.status === 200) {
//       document.getElementById("mensaje").innerHTML = http.responseText;
//     }
//   };
//   //Request
//   http.open("GET", "http://localhost:3000/mi-app/registrarse", true);
//   http.send();
// };

// function obtenerDatos() {
//   const nombre = document.getElementById("nombre").value.trim();
//   const apellido = document.getElementById("apellido").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const contraseña = document.getElementById("contraseña").value.trim();

//   if (nombre && apellido && email && contraseña !== "") {
//     getMensaje();
//   }
// }

export default registrarse;

// import React from "react";
import { useSelector } from "react-redux";

export function Profile_routes() {
  const user = useSelector((state) => state.user);
  console.log("🧑‍🔧", user);

  const calcularPromedio = () => {
    if (user.role !== "Proveedores" || !user.score || user.score.length === 0) {
      return 0;
    }
    const sumaCalificaciones = user.score.reduce(
      (total, item) => total + item.calificacion,
      0
    );
    const promedio = sumaCalificaciones / user.score.length;
    return promedio.toFixed(2);
  };

  return (
    <section id="Profile_user" style={{}}>
      <div id="img_user">
        <i
          className="far fa-user-circle fa-lg"
          style={{ fontSize: "150px" }}
        ></i>
      </div>
      <div id="data_profile">
        <div className="">
          <h1>{user.name}</h1>
        </div>
        <div className="">
          <p>
            <span className="span_bold">documento:</span> {user.cc}
          </p>
        </div>
        <div className="">
          <p>
            <span className="span_bold">Telefono:</span> {user.phone}
          </p>
        </div>
        <div className="">
          <p>
            <span className="span_bold">direccion:</span> {user.direction}
          </p>
        </div>
        <div className="">
          <p>
            <span className="span_bold">email:</span> {user.email}
          </p>
        </div>
        <div className="">
          <p>
            <span>Promedio Calificación: {calcularPromedio()}</span>
          </p>
        </div>
      </div>

      <div id="Calification_user">
        <h1>Calificaciones</h1>
        {user.role === "Proveedores" ? (
          user.score?.map((items) => (
            <div
              key={items.id}
              className="card mb-3"
              style={{ width: "100%", border: "1px solid black" }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  Calificación: {items.calificacion}
                </h5>
                <p className="card-text">Comentario: {items.comentario}</p>
              </div>
              <p></p>
            </div>
          ))
        ) : (
          <h1>Tu rol no aplica para esta opción</h1>
        )}
      </div>
      <div id="profile">
        {/* Agregar el botón de actualización aquí */}
        <button className="btn btn-primary">Actualizar</button>
      </div>
    </section>
  );
}

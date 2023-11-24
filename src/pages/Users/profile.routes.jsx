import { useState } from "react";
import { useSelector } from "react-redux";

export function Profile_routes(params) {
  const user = useSelector((state) => state.user);
  const [media, setMedia] = useState(null);
  console.log(user);

  return (
    <section id="Profile_user">
      <div id="container">
        <div id="personal_data">
          <div id="img_user">
            <i
              className="far fa-user-circle fa-lg"
              style={{ fontSize: "150px" }}
            ></i>
          </div>
          <div id="data_content">
            <h1>{user.name}</h1>
            <SpanStyle value={user.cc}>Documento:</SpanStyle>
            <SpanStyle value={user.phone}>Teléfono:</SpanStyle>
            <SpanStyle value={user.direction}>Dirección:</SpanStyle>
            <SpanStyle value={user.email}>E-mail:</SpanStyle>
            <SpanStyle value={media}>Promedio:</SpanStyle>
          </div>
          <button type="button" className="btn btn-secondary ">
            Actualizar Datos
          </button>
        </div>
        <div id="Calification_user">
          <h1>Calificaciones</h1>
          <div id="scroll__data">
            {user.role == "Proveedores" ? (
              user.score?.map((items) => (
                <div key={items.id}>
                  <hr />
                  <p>Calificación: {items.calificacion}</p>
                  <p>Comentario:{items.comentario}</p>
                  <hr />
                </div>
              ))
            ) : (
              <h1>Tu rol no aplica para esta opción</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
const SpanStyle = ({ children, value }) => {
  return (
    <p>
      <span className="span_bold">{children}</span>
      {value}
    </p>
  );
};

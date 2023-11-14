import { useSelector } from "react-redux";

export function Profile_routes(params) {
  const user = useSelector((state) => state.user);
  return (
    <section id="Profile_user">
      <div id="personal_data">
        <div id="img_user">
          <i
            className="far fa-user-circle fa-lg"
            style={{ fontSize: "200px" }}
          ></i>
        </div>
        <div id="data_content">
          <h1>{user.name}</h1>
          <p>
            <span className="span_bold">documento:</span> {user.cc}
          </p>
          <p>
            <span className="span_bold">Telefono:</span> {user.phone}
          </p>
          <p>
            <span className="span_bold">direccion:</span> {user.direction}
          </p>
          <p>
            <span className="span_bold">email:</span> {user.email}
          </p>
        </div>
      </div>
      <div id="Calification_user">
        <h1>Calificaciones</h1>
        <p>los empleados no aplican</p>
      </div>
    </section>
  );
}

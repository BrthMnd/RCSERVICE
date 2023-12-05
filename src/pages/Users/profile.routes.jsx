import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function Profile_routes() {
  const user = useSelector((state) => state.user);
  const [media, setMedia] = useState(0);
  useEffect(() => {
    if (user.score.length === 0) {
      setMedia(0);
      return
    }

    const suma = user.score.reduce(
      (acumulador, valor) => acumulador + valor.CalificacionesFloat,
      0
    );
    const promedio = suma / user.score.length;

    setMedia(promedio.toFixed(1));
  }, [user.score]);
  console.log(media)

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
            {user.role == "Proveedores" && (
              <SpanStyle value={media}>Promedio:</SpanStyle>
            )}
            <SpanStyle
              value={
                !user.category == 0
                  ? user.category.map((item) => {
                      return (
                        <span className="badge bg-secondary" key={item._id}>
                          {item.Nombre_Categoria}
                        </span>
                      );
                    })
                  : "No aplica"
              }
            >
              Categorías:
            </SpanStyle>
          </div>
          <button
            className="btn btn-secondary "
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalUpdateUser"
          >
            Actualizar Datos
          </button>
        </div>
        <div id="Calification_user">
          <h1>Calificaciones</h1>
          <div id="scroll__data">
          <CalificationAndComent user={user} media={media}/>
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

const CalificationAndComent =({user,media})=>{
  console.log(user,media)
  if(user.role == "Proveedores" && media !== 0 )  {
    return user.score?.map((items) => (
      <div key={items.id}>
        <hr />
        <p>Calificación: {items.CalificacionesFloat}</p>
        <p>Comentario:{items.Comentarios}</p>
        <hr />
      </div>))
  } else if (media === 0 && user.role == "Proveedores") {
    console.log('entro')
    return (
    <h1 style={{ textAlign: "center" }}>
      Aun nadie a comentado
    </h1>

    )
  }else{
    <h1 style={{ textAlign: "center" }}>
      Tu rol no aplica para esta opión
    </h1>

  }
  

}
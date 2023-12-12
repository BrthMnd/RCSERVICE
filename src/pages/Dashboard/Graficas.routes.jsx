import { ApiGet } from "../../hooks/useApi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Graficas } from "./Categorias";
import { GraficasInmueble } from "./Inmuebles";
// import { GraficaServicios } from "./Servicios";
import { GraficasOfertaEstado } from "./OfertaEstado";
import { IconLoading } from "../../Utils/IconsLoading";
import {GraficasUsuarios} from "../Dashboard/Usuarios";
ChartJS.register(ArcElement, Tooltip, Legend);

export function Dashboard() {
  const [data, loading, error] = ApiGet("/dashboard");
  if (!loading && !error) {
    console.log(data);
  }
  console.log(loading);
  return (
    <>
      <section style={{ height: "100%" }}>
        <IconLoading isLoading={loading} />
        {error && (
          <h1>
            Error <span>{error.message}</span>
          </h1>
        )}
        {!loading && !error && (
          <>
            <div
  style={{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
  }}
>
  <div style={{ 
    border: "1px solid #ccc", 
    padding: "10px", 
    margin: "10px", 
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"  
  }}>
    <Graficas data={data.servicios}/>
  </div>
  <div style={{ 
    border: "1px solid #ccc", 
    padding: "10px", 
    margin: "10px", 
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"  // Añade sombreado
  }}>
    <GraficasInmueble data={data.inmuebles} />
  </div>
  <div style={{ 
    border: "1px solid #ccc", 
    padding: "10px", 
    margin: "10px", 
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"  // Añade sombreado
  }}>
    <GraficasOfertaEstado data={data.offers} />
  </div>
  {/* <GraficaServicios data={data.servicios} /> */}
  <div style={{ 
    border: "1px solid #ccc", 
    padding: "10px", 
    margin: "10px", 
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"  // Añade sombreado
  }}>
    <GraficasUsuarios data={data.usuarios} />
  </div>
</div>

          </>
        )}
      </section>
    </>
  );
}

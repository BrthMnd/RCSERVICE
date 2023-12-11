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
              <Graficas data={data.categorias}/>
              <GraficasInmueble data={data.inmuebles} />
              <GraficasOfertaEstado data={data.offers} />
              
              {/* <GraficaServicios data={data.servicios} /> */}
              <GraficasUsuarios data={data.usuarios} />
            </div>
          </>
        )}
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import { ApiGet } from "../../hooks/useApi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Graficas } from "./Categorias";
import { GraficasInmueble } from "./Inmuebles";
import { GraficaServicios } from "./Servicios";
import { IconLoading } from "../../Utils/IconsLoading";
ChartJS.register(ArcElement, Tooltip, Legend);
const styles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",

  overflow: "auto",
};
export function Dashboard() {
  const [data, loadingData, errorData] = ApiGet(
    "https://rcservice.onrender.com/api/dashboard"
  );
  if (!loadingData && !errorData) {
    console.log(data);
  }

  return (
    <section style={{ height: "100%" }}>
      {loadingData && <IconLoading />}
      {errorData && (
        <h1>
          Error <span>{errorData.message}</span>
        </h1>
      )}
      {!loadingData && !errorData && (
        <>
          <div style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  }}>
            <Graficas data={data.categorias} />
            <GraficasInmueble data={data.inmuebles} />
            <GraficaServicios data={data.servicios} />
          </div>
        </>
      )}
    </section>
  );
}

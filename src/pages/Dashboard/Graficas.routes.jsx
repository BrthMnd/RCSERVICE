import { useEffect, useState } from "react";
import { ApiGet } from "../../hooks/useApi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Graficas } from "./Categorias";
import { GraficasInmueble } from "./Inmuebles";
import { GraficaServicios } from "./Servicios";
import {IconLoading} from "../../Utils/IconsLoading"
ChartJS.register(ArcElement, Tooltip, Legend);

export function Dashboard() {
  const [data, loadingData, errorData] = ApiGet(
    "https://rcservice.onrender.com/api/dashboard"
  );
  if (!loadingData && !errorData ){
    console.log(data)
  }

  return (
    loadingData && (
      <IconLoading />
    ),
    errorData && (
      <h1>Error <span>{errorData.message}</span></h1>

    ),
    !loadingData && !errorData && (
      <>
      <div class="row row-cols-3 justify-content-center text-center">
        <Graficas data={data.categorias} />
        <GraficasInmueble data={data.inmuebles}/> 
        <GraficaServicios data={data.servicios} />  
      </div> 
      </>

    ) 
  );
}

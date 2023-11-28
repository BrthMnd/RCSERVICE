import { ApiGet } from "../../hooks/useApi";
import {Graficas} from "../Dashboard/Categorias";
import { Dashboard } from "../Dashboard/Graficas.routes";
import { GraficasInmueble } from "../Dashboard/Inmuebles";

export function Home() {
  const cardStyle = {
    top: "20px",
    left: "20px",
    width: "500px",
    padding: "30px",
    borderRadius: "10px",
      // border:"1px solid black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    
  };
   
  return (
    <Dashboard />
   
  );
}

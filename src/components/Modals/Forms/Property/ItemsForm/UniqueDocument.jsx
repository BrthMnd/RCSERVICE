import axios from "axios";
import { AlertSuccess, AlertErrorDocument } from "../../../../../assets/js/Alerts";

export default async function ApiPost(url, dat) {
    try {
      const result = await axios.post(url, dat);
      AlertSuccess("Creado con éxito");
      return result.data;
    } catch (err) {
      if (err.response && err.response.status === 400) {
        return AlertErrorDocument();
      }
      console.error(err);
      return { error: "Error al crear" };
    }
  }
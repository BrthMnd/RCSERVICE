import { useState, useEffect } from "react";
import axios from "axios";
import { AlertSuccess } from "../assets/js/Alerts";
export function ApiGet(url = "https://rickandmortyapi.com/api/character") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        if (url == "https://rickandmortyapi.com/api/character") {
          setData(data.data.results);
          setLoading(false);
        } else {
          setData(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        seterror(error);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
}

export function ApiPost(url, dat) {
  axios
    .post(url, dat)
    .then(() => {
      AlertSuccess("Creado con exito");
      window.location.reload();
    })
    .catch((error) => {
      console.log("error <--||-->", error);
    });
}

export function ApiDelete(url, tabla) {
  axios
    .delete(`${url}/${tabla.id}`)
    .then(() => {
      console.log("Elemento eliminado con éxito");
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error al eliminar el elemento:", error);
    });
}
export function ApiPut(url, tabla) {
  console.log(`${url}/${tabla.id}`, tabla);
  axios
    .put(`${url}/${tabla.id}`, tabla)
    .then(() => {
      console.log("Actualizado con exito");
      AlertSuccess("Actualizado con exito");
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error en axios put " + error);
    });
}

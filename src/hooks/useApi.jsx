import { useState, useEffect } from "react";
import axios from "axios";
import { AlertSuccess } from "../assets/js/Alerts";
export function useApiGet(url = "https://rickandmortyapi.com/api/character") {
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
export function useApiGet2(url1, url2) {
  const [data1, setData1] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [error1, seterror1] = useState(null);
  const [data2, setData2] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [error2, seterror2] = useState(null);
  useEffect(() => {
    axios
      .get(url1)
      .then((data) => {
        setData1(data.data);
        setLoading1(false);
        axios
          .get(url2)
          .then((data) => {
            setData2(data.data);
            setLoading2(false);
          })
          .catch((error) => {
            seterror2(error);
            setLoading2(false);
          });
      })
      .catch((error) => {
        seterror1(error);
        setLoading1(false);
      });
  }, [url1, url2]);
  // Cuando pones la URL dentro de los corchetes [], le estás diciendo al efecto que debe observar cambios en esa URL y ejecutarse si cambia. Esto es útil porque, si en algún momento decides cambiar la URL en el componente que utiliza ApiTest, el efecto se volverá a ejecutar con la nueva URL, lo que te permitirá cargar datos de una nueva fuente.

  return [data1, loading1, error1, data2, loading2, error2];
}
export function useApiPost(url, dat) {
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

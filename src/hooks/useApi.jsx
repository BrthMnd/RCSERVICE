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
export function ApiGetById(url, id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(`-> ${url}/${id}`);
  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url, id]);

  return [data, loading, error];
}
export function ApiGet2(url1, url2) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function FetchApi() {
      try {
        let response = await axios.get(url1);
        setData1(response.data);
        response = await axios.get(url2);
        setData2(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    FetchApi();
  }, [url1, url2]);

  return [data1, data2, loading, error];
}
// export function ApiPost(url, dat) {
//   axios
//     .post(url, dat)
//     .then(() => {
//       AlertSuccess("Creado con exito");
//       console.log("hola <-");
//       window.location.reload();
//     })
//     .catch((error) => {
//       console.log("error <--||-->", error);
//     });
// }
export async function ApiPost(url, dat) {
  try {
    const result = await axios.post(url, dat);
    // console.log(result.data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
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

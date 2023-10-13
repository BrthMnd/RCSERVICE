import { useState, useEffect } from "react";
import axios from "axios";
export function ApiGet(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const GetApi = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log("Error tipo ->" + err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    GetApi();
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
  console.log("entro");
  try {
    const result = await axios.post(url, dat);
    console.log("paso");
    console.log(result);
    return result.data;
  } catch (err) {
    console.log(err);
    console.log("err");
  } finally {
    console.log("final");
  }
  return "hola";
}

export async function ApiDelete(url, tabla) {
  try {
    const API = await axios.delete(`${url}/${tabla.id}`);
    if (API.status == 200) {
      return "Eliminado Correctamente";
    } else {
      console.log("error desconocido");
      return "error desconocido ";
    }
  } catch (error) {
    console.log(error);
    if (error.status == 409) {
      return "No fue eliminado ";
    } else if (error.status == 500) {
      return "error de api ";
    }
  }
}

export function ApiPut(url, tabla) {
  console.log(`${url}/${tabla.id}`, tabla);
  return axios
    .put(`${url}/${tabla.id}`, tabla)
    .then((response) => {
      console.log("Respuesta de API PUT:", response.data);
      return response.data; // Devolver directamente la respuesta
    })
    .catch((error) => {
      console.error("Error en axios put ->" + error);
    });
}

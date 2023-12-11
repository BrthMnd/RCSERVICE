import { useState, useEffect } from "react";
import axios from "../libs/axios";
import { AlertSuccess } from "../assets/js/Alerts";
export const ApiGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const GetApi = async () => {
      try {
        const response = await axios.get(url);
        response.data;
        setData(response.data);
      } catch (err) {
        "Error tipo ->" + err.message;
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    GetApi();
  }, [url]);

  return [data, loading, error];
};
export function ApiGetById(url, id) {
  console.log("🚀 ~ file: useApi.jsx:27 ~ ApiGetById ~ url, id:", url, id);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((response) => {
        console.log("🚀 ~ file: useApi.jsx:36 ~ .then ~ response:", response);

        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("🚀 ~ file: useApi.jsx:42 ~ useEffect ~ error:", error);
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
        response.data;
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
//       ("hola <-");
//       window.location.reload();
//     })
//     .catch((error) => {
//       ("error <--||-->", error);
//     });
// }
export async function ApiPost(url, dat) {
  try {
    const result = await axios.post(url, dat);
    AlertSuccess("Creado con éxito");
    return result.data;
  } catch (err) {
    console.log("🚀 ~ file: useApi.jsx:92 ~ ApiPost ~ err:", err);
    if (err.response && err.response.status === 400) {
      return { error: err.message };
    }
    return { error: err.message };
  }
}

export async function ApiDelete(url, tabla) {
  console.info("Entro a delete");
  try {
    console.log(`${url}/${tabla.id}`);
    const API = await axios.delete(`${url}/${tabla.id}`);
    console.log("🚀 ~ file: useApi.jsx:105 ~ ApiDelete ~ API:", API);
    if (API.status == 200) {
      return true;
    } else {
      console.log("error desconocido");
      return false;
    }
  } catch (error) {
    console.info(error);
    console.log("🚀 ~ file: useApi.jsx:113 ~ ApiDelete ~ error:", error);
    return false;
  }
}

export async function ApiPut(url, tabla) {
  console.warn(`${url}/${tabla.id} <- Entra a ApiPut`);
  try {
    const result = await axios.put(`${url}/${tabla.id}`, tabla);
    AlertSuccess("Actualizado con éxito");
    result;
    return result;
  } catch (error) {
    error;
    return error;
  }
}

import axios from "axios";
import { useEffect, useState } from "react";

export function ApiGet2(url1, url2) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(url1);
        setData1(response.data);
        console.log(response.data);
        response = await axios.get(url2);
        setData2(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);

        setError(err);
      }
    };
    fetchData();
  }, [url1, url2]);
  return [data1, data2, loading, error];
}

export function ApiGet3(url1, url2, url3) {
  const [response1, setResponse1] = useState({});
  const [response2, setResponse2] = useState({});
  const [response3, setResponse3] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let result = await axios.get(url1);
        console.log("listo 1 🚩");
        setResponse1(result.data);
        result = await axios.get(url2);
        console.log("listo 2 🚩");
        setResponse2(result.data);
        result = await axios.get(url3);
        console.log("listo 3 🚩");
        setResponse3(result.data);
        setLoading(false);
      } catch (err) {
        console.log("Error en ApiGet3 ->" + err);
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [url1, url2, url3]);

  return [response1, response2, response3, loading, error];
}
export function ApiDeleteCandidate(url1, url2, id1, id2) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const ApiSAD = async () => {
      try {
        const response1 = await axios.delete(`${url1}/${id1}`);
        setData1(response1.data);
        const response2 = await axios.delete(`${url2}/${id2}`);
        setData2(response2.data);
      } catch (err) {
        console.error(err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    ApiSAD();
  }, [url1, url2, id1, id2]);
  return [data1, data2, loading, error];
}

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
  const [responses, setResponses] = useState([{}, {}, {}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [result1, result2, result3] = await Promise.all([
          axios.get(url1),
          axios.get(url2),
          axios.get(url3),
        ]);
        console.log(url1);
        setResponses([result1.data, result2.data, result3.data]);
        setLoading(false);
        console.log("FLAG 🚩");
      } catch (err) {
        setLoading(false);
        console.log("Error en ApiGet3 ->" + err);
        setError(err);
      }
    }

    fetchData();
  }, [url1, url2, url3]);

  return [responses, loading, error];
}

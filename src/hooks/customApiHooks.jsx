import axios from "axios";
import { useEffect, useState } from "react";

export function ApiGet3(url1, url2, url3) {
  const [response, setResponse] = useState({});
  const [response2, setResponse2] = useState({});
  const [response3, setResponse3] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(
    () => async () => {
      try {
        const result1 = await axios.get(url1);
        setResponse(result1.data);
        const result2 = await axios.get(url2);
        setResponse2(result2.data);
        const result3 = await axios.get(url3);
        setResponse3(result3.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.log("Error ApiGet3 ->" + err);
      }
    },
    [url1, url2, url3]
  );
  return [response, response2, response3, loading, error];
}

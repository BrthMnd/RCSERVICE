import { useState, useEffect } from "react";
import axios from "axios";
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
  // Cuando pones la URL dentro de los corchetes [], le estás diciendo al efecto que debe observar cambios en esa URL y ejecutarse si cambia. Esto es útil porque, si en algún momento decides cambiar la URL en el componente que utiliza ApiTest, el efecto se volverá a ejecutar con la nueva URL, lo que te permitirá cargar datos de una nueva fuente.

  return [data, loading, error];
}
// export function useApiPost(url, data) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, seterror] = useState(null);
//   useEffect(() => {
//     axios
//       .post(url)
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         seterror(error);
//         setLoading(false);
//       });
//   }, [url]);
//   // Cuando pones la URL dentro de los corchetes [], le estás diciendo al efecto que debe observar cambios en esa URL y ejecutarse si cambia. Esto es útil porque, si en algún momento decides cambiar la URL en el componente que utiliza ApiTest, el efecto se volverá a ejecutar con la nueva URL, lo que te permitirá cargar datos de una nueva fuente.

//   return [data, loading, error];
// }

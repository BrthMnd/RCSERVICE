import { useState, useEffect } from "react";
export function useApi(url = "https://rickandmortyapi.com/api/character") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);
  console.log(url);
  console.log(data);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results), setLoading(false);
      })
      .catch((error) => {
        seterror(error), setLoading(false);
      });
  }, [url]);
  // Cuando pones la URL dentro de los corchetes [], le estás diciendo al efecto que debe observar cambios en esa URL y ejecutarse si cambia. Esto es útil porque, si en algún momento decides cambiar la URL en el componente que utiliza ApiTest, el efecto se volverá a ejecutar con la nueva URL, lo que te permitirá cargar datos de una nueva fuente.

  return [data, loading, error];
}

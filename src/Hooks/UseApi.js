import { useEffect, useState } from "react";
import { act } from "@testing-library/react";

function UseMyApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function CallMyAPI() {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon/").then(
        (response) => response.json()
      );
      setData(result.results);
    }
    CallMyAPI();
  }, []);
  return data;
}
export default UseMyApi;

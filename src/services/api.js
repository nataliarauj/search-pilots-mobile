import axios from "axios";

export const fetchPilotos = async (nome) => {
  const response = await axios.get("https://v1.formula-1.api-sports.io/drivers", {
    headers: {
      "x-rapidapi-key": "70d6ef901f84a9596c55ba95b131f50a",
      "x-rapidapi-host": "v1.formula-1.api-sports.io",
    },
    params: { search: nome },
  });

  return response.data.response || [];
};

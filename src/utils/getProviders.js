import axios from "axios";

const getProviders = async (type, id) => {
  try {
    const providers = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/watch/providers`,
      {
        params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
      }
    )
    return providers.data.results;
  } catch (error) {
    console.log("axios error", error);
  }
};

export default getProviders
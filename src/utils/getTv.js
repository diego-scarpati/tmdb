import axios from "axios";

const getTv = async () => {
  try {
    const axiosTv = await axios.get(
      `https://api.themoviedb.org/3/discover/tv`,
      {
        params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
      }
    );
    return axiosTv.data;
  } catch (error) {
    console.log("axios error", error);
  }
};

export default getTv
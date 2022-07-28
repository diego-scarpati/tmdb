import axios from "axios";

const getSelected = async (type, id) => {
  try {
    const axiosSelected = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}`,
      {
        params: { api_key: "6edac15cca9bd35488d662783103bd8f" },
      }
    )
    return axiosSelected.data;
  } catch (error) {
    console.log("axios error", error);
  }
};

export default getSelected
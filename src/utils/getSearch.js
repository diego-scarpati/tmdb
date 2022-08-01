import axios from "axios";

const apiKey = "api_key=6edac15cca9bd35488d662783103bd8f";
const path = "https://api.themoviedb.org/3/search";
const getSearch = async (type, searchValue, country_code) => {
  try {
    const axiosSearch = await axios.get(
      `${path}/${type}?${apiKey}&query=${searchValue}&watch_region=${country_code}&with_watch_monetization_types=flatrate`
    );
    return axiosSearch.data;
  } catch (error) {
    console.log("axios error", error);
  }
};

export default getSearch;

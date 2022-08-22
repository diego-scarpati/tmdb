import axios from "axios";

const getGeoInfo = async () => {
  try {
    const geoInfo = await axios.get("https://ipapi.co/json/");
    const country = {country_code:geoInfo.data.country_code, country_name: geoInfo.data.country_name}
    return country;
  } catch (error) {
    console.log("axios error", error);
  }
};

export default getGeoInfo;

import axios from "axios";

const getGeoInfo = async () => {
  try {
    const geoInfo = await axios.get("https://ipapi.co/json/");
    console.log("geoInfo", geoInfo.data);
    const country = {country_code:geoInfo.data.country_code, country_name: geoInfo.data.country_name}
    return country;
  } catch (error) {
    console.log("axios error", error);
  }
};

export default getGeoInfo;

// countryName: data.country_name,
// countryCode: data.country_calling_code

import axios from "axios";

export const getUser = async () => {
  const id = window.localStorage.getItem("user");
  try {
    axios.get(`favorites/${id}`).then((result) => {
      return result.data;
    });
  } catch (error) {
    console.log("getFavorites Error: ", error);
  }
};

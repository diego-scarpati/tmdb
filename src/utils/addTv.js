import axios from "axios";

export const addTv = async (data) => {
  try {
    const addedTv = await axios.post(
      "http://localhost:3002/api/tvs/addTv",
      data
    );
    return addedTv;
  } catch (error) {
    console.log(error);
  }
};
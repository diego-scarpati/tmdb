import axios from "axios";

export const userTvs = async (id) => {
  try {
    const allUserTvs = await axios.get(
      `http://localhost:3002/api/tvs/allUserTvs?id=${id}`
    );
    return allUserTvs.data
  } catch (error) {
    console.log(error);
  }
};
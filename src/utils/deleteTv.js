import axios from "axios";

export const removeTv = async (data) => {  
  const { type, id, tv } = data;
  try {
    const removedTvs = await axios.put(
      `http://localhost:3002/api/tvs/removeTv?id=${id}&tv=${tv}`,
      data
    );
    return removedTvs;
  } catch (error) {
    console.log(error);
  }
};
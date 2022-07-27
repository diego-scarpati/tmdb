export const getUser = async () => {
  const id = window.localStorage.getItem("user");
  try {
    axios.get(`http://localhost:3001/api/favorites/${id}`).then((result) => {
      return result.data;
    });
  } catch (error) {
    console.log("getFavorites Error: ", error);
  }
};

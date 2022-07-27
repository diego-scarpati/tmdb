import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("http://localhost:3001/api/users")
      .then((response) => (response.data))
      .then(result => setUsers(result))
      .catch((error) => console.log("Error: ", error));
  };
  useEffect(() => {
    getUsers();
    console.log("se ejecuto el effect de users")
    console.log(users)
  }, []);

  return (
    <>
    <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <h5>
                {user.username}, has {user.favorites.movies.length} Movies and{" "}
                {user.favorites.movies.length} Tv Series.
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;

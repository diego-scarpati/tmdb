import React, { useContext } from "react";
import useInput from "../hooks/useInputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { UserContext } from "../App";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Login = () => {
  const [userLS, setUserLS] = useLocalStorage("user", "");
  // const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const username = useInput();
  const password = useInput();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        username: username.value,
        password: password.value,
      });
      navigate("/");
    } catch ({ response }) {
      console.log("Login.js Catch repsonse: ", response);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input type="text" required placeholder="Username" {...username} />
        <input type="password" required placeholder="Password" {...password} />
        <button>Sign in</button>
      </form>
    </>
  );
};

export default Login;

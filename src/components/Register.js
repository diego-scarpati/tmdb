import React from "react";
import  useInput  from "../hooks/useInputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const username = useInput();
  const name = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/register", {
        username: username.value,
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      });
      navigate("/login");
    } catch ({ response }) {
      console.log("Register.js Catch repsonse: ", response);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <input type="text" required placeholder="Username" {...username} />
        <input type="text" required placeholder="First name" {...name} />
        <input type="text" required placeholder="Last name" {...lastName} />
        <input type="text" required placeholder="email" {...email} />
        <input type="password" required placeholder="Password" {...password} />
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "https://dosmos-backend.herokuapp.com/user/login",
        {
          username,
          password
        }
      );
      localStorage.setItem("token", data.data.token);
      history.push("./Home");
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <div>
      <h1>Nasa-Api </h1>
      <label htmlFor="username">
        username
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter your username"
        />
      </label>
      <label htmlFor="password">
        password
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />
      </label>

      <button onClick={handleLogin}>Login</button>

      <Link to="/signup">Sign Up</Link>
      <div>{error ? "Something went wrong" : ""}</div>
    </div>
  );
}

export default Login;

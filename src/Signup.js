import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await axios.post("https://dosmos-backend.herokuapp.com/user/signup", {
        username,
        password
      });
      history.push("/");
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <div>
      <label htmlFor="username">
        username
        <input
          id="username"
          placeholder="enter your username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        password
        <input
          placeholder="enter your password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Signup</button>
      <div>{error ? "something went wrong" : ""}</div>
    </div>
  );
}

export default Signup;

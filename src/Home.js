import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function Home() {
  const [auth, setAuth] = useState(true);
  const [picture, setPicture] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://dosmos-backend.herokuapp.com/info/picture-of-day",
        {
          headers: {
            token
          }
        }
      );
      setPicture(data);
    };
    if (!token) {
      setAuth(false);
    } else {
      fetchData();
    }
  }, []);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>{picture.title}</h1>
      <p>{picture.explanation}</p>
      <iframe
        width="560"
        height="315"
        title={picture.title}
        src={picture.url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Home;

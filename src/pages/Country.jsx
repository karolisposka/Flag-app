import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Country = () => {
  const location = useLocation();
  const [country, setCountry] = useState();
  const [error, setError] = useState();

  const getCountryData = async (title) => {
    try {
      const response = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `name/${title}?fullText=true`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      await setCountry(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(country);

  return <div>{location.pathname}</div>;
};

export default Country;

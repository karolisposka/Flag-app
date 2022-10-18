import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/button/Button";
import HomeContainer from "../components/homeContainer/HomeContainer";
import ContentSection from "../components/contentSection/ContentSection";
import { useParams, useNavigate } from "react-router-dom";

const Country = () => {
  const { title } = useParams();
  const navigate = useNavigate();
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
      setCountry(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountryData(title);
  }, []);

  return (
    <HomeContainer>
      <ContentSection>
        <Button
          handleClick={() => {
            navigate(-1);
          }}
          arrow={true}
        >
          back
        </Button>
        {title}
      </ContentSection>
    </HomeContainer>
  );
};

export default Country;

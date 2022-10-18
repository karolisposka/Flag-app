import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/button/Button";
import HomeContainer from "../components/homeContainer/HomeContainer";
import ContentSection from "../components/contentSection/ContentSection";
import SingleCountryContainer from "../components/singleCountryContainer/SingleCountryContainer";
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
      setError(err);
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
        {country ? (
          <SingleCountryContainer
            name={country[0].name.common}
            url={country[0].flags.svg}
            nativeName={country[0].name.nativeName}
            population={country[0].population}
            region={country[0].region}
            subRegion={country[0].subregion}
            capital={country[0].capital}
            currency={country[0].currencies}
            languages={country[0].languages}
            domain={country[0].name.common}
            neighbors={country[0].borders}
          />
        ) : (
          <div>loading</div>
        )}
      </ContentSection>
    </HomeContainer>
  );
};

export default Country;

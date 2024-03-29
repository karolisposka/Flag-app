import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/button/Button";
import HomeContainer from "../components/homeContainer/HomeContainer";
import ContentSection from "../components/contentSection/ContentSection";
import SingleCountryContainer from "../components/singleCountryContainer/SingleCountryContainer";
import Notification from "../components/notification/Notification";
import Loader from "../components/loader/Loader";
import { useParams, useNavigate } from "react-router-dom";

const Country = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [error, setError] = useState();

  //fetch selected country data

  const getCountryData = async (title) => {
    try {
      const response = await axios({
        baseURL: "https://restcountries.com/v3.1/",
        url: `name/${title}?fullText=true`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  //fetch selected country neighbor data

  const getNeighborCountry = async (title) => {
    try {
      const response = await axios({
        baseURL: "https://restcountries.com/v3.1/",
        url: `alpha/${title}`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      setData(response.data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    if (params.title) {
      getCountryData(params.title);
    } else {
      getNeighborCountry(params.country);
    }
  }, [params]);

  return (
    <HomeContainer>
      {error && <Notification>{error}</Notification>}
      <ContentSection>
        <Button
          handleClick={() => {
            navigate("/");
          }}
          arrow={true}
        >
          back
        </Button>
        {data ? (
          <SingleCountryContainer
            name={data[0].name.common}
            url={data[0].flags.svg}
            nativeName={data[0].name.nativeName}
            population={data[0].population}
            region={data[0].region}
            subRegion={data[0].subregion}
            capital={data[0].capital}
            currency={data[0].currencies}
            languages={data[0].languages}
            domain={data[0].name.common}
            neighbors={data[0].borders}
          />
        ) : (
          <Loader />
        )}
      </ContentSection>
    </HomeContainer>
  );
};

export default Country;

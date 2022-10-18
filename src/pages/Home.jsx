import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import HomeContainer from "../components/homeContainer/HomeContainer";
import Filter from "../components/filter/Filter";
import Select from "../components/select/Select";
import Loader from "../components/loader/Loader";
import FiltersContainer from "../components/filtersContainer/FiltersContainer";
import CountriesList from "../components/coutriesList/CountriesList";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Home = () => {
  const [countries, setCountries] = useState();
  const [error, setError] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const getCountries = async () => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `${process.env.REACT_APP_ALL_DATA}`,
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      await setCountries(res.data);
    } catch (err) {
      setError(err);
    }
  };

  const handleSelectChange = (value) => {
    console.log(value);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <HomeContainer>
      <FiltersContainer>
        <Filter handleChange={(value) => {}} />
        <Select
          options={options}
          placeholder="Filter by Region"
          handleChange={(value) => {
            handleSelectChange(value);
          }}
        />
      </FiltersContainer>
      {countries ? <CountriesList countries={countries} /> : <Loader />}
    </HomeContainer>
  );
};

export default Home;

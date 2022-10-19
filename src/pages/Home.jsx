import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import HomeContainer from "../components/homeContainer/HomeContainer";
import Filter from "../components/filter/Filter";
import Select from "../components/select/Select";
import Notification from "../components/notification/Notification";
import Loader from "../components/loader/Loader";
import FiltersContainer from "../components/filtersContainer/FiltersContainer";
import CountriesList from "../components/coutriesList/CountriesList";

//options of select element

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
  const [search, setSearch] = useSearchParams();

  //fetch countries by region

  const sortCountriesByContitent = async (region) => {
    try {
      const response = await axios({
        baseURL: "https://restcountries.com/v3.1/",
        url: `region/${region}`,
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      setCountries(response.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  //fetch countries by name

  const searchCountriesByTitle = async (title) => {
    try {
      const response = await axios({
        baseURL: "https://restcountries.com/v3.1/",
        url: `name/${title}`,
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });

      setCountries(response.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.message);
      setCountries([]);
    }
  };

  //fetch all countries

  const getCountries = async () => {
    try {
      const res = await axios({
        baseURL: "https://restcountries.com/v3.1/",
        url: `all`,
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      await setCountries(res.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    setCountries(null);
    const title = search.get("title");
    const sort = search.get("sort");
    if (title) {
      searchCountriesByTitle(title);
    } else if (sort) {
      sortCountriesByContitent(sort);
    } else {
      getCountries();
    }
  }, [search.get("sort"), search.get("title")]);

  //event handlers

  const handleSelectChange = (sort) => {
    setSearch({ sort });
  };

  const handleChange = (title) => {
    setSearch({ title });
  };

  return (
    <HomeContainer>
      <FiltersContainer>
        <Filter
          handleChange={(value) => {
            handleChange(value);
          }}
        />
        <Select
          options={options}
          placeholder="Filter by Region"
          handleChange={(value) => {
            handleSelectChange(value);
          }}
        />
      </FiltersContainer>
      {countries ? <CountriesList countries={countries} error={error} /> : <Loader />}
      {error && <Notification>{error}</Notification>}
    </HomeContainer>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import HomeContainer from "../components/homeContainer/HomeContainer";
import Filter from "../components/filter/Filter";
import Select from "../components/select/Select";
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
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `region/${region}`,
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });
      setCountries(response.data);
    } catch (err) {
      setError("no data found");
    }
  };

  //fetch countries by name

  const searchCountriesByTitle = async (title) => {
    try {
      const response = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `name/${title}`,
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });

      setCountries(response.data);
    } catch (err) {
      setError(err);
    }
  };

  //fetch all countries

  const getCountries = async () => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: `all`,
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
      {countries ? <CountriesList countries={countries} /> : <Loader />}
    </HomeContainer>
  );
};

export default Home;

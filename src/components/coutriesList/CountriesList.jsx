import React from "react";
import PropTypes from "prop-types";
import * as S from "./CountiresList.styles";

const CountriesList = ({ countries }) => {
  return (
    <S.ListSection>
      <S.List>
        {countries &&
          countries.map((country, index) => (
            <S.StyledCountryCard
              key={index}
              url={country.flags.svg}
              title={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
      </S.List>
    </S.ListSection>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      population: PropTypes.number,
      region: PropTypes.string,
      capital: PropTypes.array,
    }).isRequired
  ),
};

export default CountriesList;

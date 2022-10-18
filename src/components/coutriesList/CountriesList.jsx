import React from "react";
import * as S from "./CountiresList.styles";

const CountriesList = ({ countries }) => {
  return (
    <S.ListSection>
      {countries ? (
        <S.List>
          {countries &&
            countries.map((country, index) => (
              <S.StyledCountryCard
                key={index}
                url={country.flags.png}
                title={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))}
        </S.List>
      ) : (
        <div>loading</div>
      )}
    </S.ListSection>
  );
};

export default CountriesList;
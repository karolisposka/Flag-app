import React from "react";
import * as S from "./SingleCountryContainer.styles";

const SingleCountryContainer = ({
  name,
  url,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  currency,
  languages,
  domain,
  neighbors,
}) => {
  return (
    <S.Container>
      <S.Image src={url} />
      <S.Title>{name}</S.Title>
      <S.Key>
        Native Name: <S.Span>{Object.values(nativeName)[0].official}</S.Span>
      </S.Key>
      <S.Key>
        Population: <S.Span>{population.toLocaleString()}</S.Span>
      </S.Key>
      <S.Key>
        Region: <S.Span>{region}</S.Span>
      </S.Key>
      <S.Key>
        Sub Region: <S.Span>{subRegion}</S.Span>
      </S.Key>
      <S.Key>
        Capital: <S.Span>{capital}</S.Span>
      </S.Key>
      <S.Key>
        Top Level Domain: <S.Span>{domain}</S.Span>
      </S.Key>
      <S.Key>
        Currencies: <S.Span>{Object.keys(currency)}</S.Span>
      </S.Key>
      <S.Key>
        Languages:
        {Object.values(languages).map((language) => (
          <S.Span> {language} </S.Span>
        ))}
      </S.Key>
      <S.Title>Border Countries</S.Title>
      <S.BorderCountriesWrapper>
        {neighbors.length > 0 && neighbors ? (
          neighbors.map((country) => <S.StyledButton> {country} </S.StyledButton>)
        ) : (
          <div> No countries </div>
        )}
      </S.BorderCountriesWrapper>
    </S.Container>
  );
};

export default SingleCountryContainer;

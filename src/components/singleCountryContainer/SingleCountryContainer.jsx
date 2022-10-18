import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Image url={url} />
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <S.Text>
          <S.TextSection>
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
          </S.TextSection>
          <S.TextSection>
            <S.Key>
              Top Level Domain: <S.Span>{domain}</S.Span>
            </S.Key>
            <S.Key>
              Currencies: <S.Span>{Object.keys(currency)}</S.Span>
            </S.Key>
            <S.Key>
              Languages:
              {Object.values(languages).map((language, index) => (
                <S.Span key={index}> {language} </S.Span>
              ))}
            </S.Key>
          </S.TextSection>
        </S.Text>
        <S.Title>Border Countries</S.Title>
        <S.BorderCountriesWrapper>
          {neighbors && neighbors.length > 0 ? (
            neighbors.map((country, index) => (
              <S.StyledButton
                key={index}
                handleClick={() => {
                  navigate(`/neighbor/${country}`);
                }}
              >
                {country}
              </S.StyledButton>
            ))
          ) : (
            <S.NoData> No countries </S.NoData>
          )}
        </S.BorderCountriesWrapper>
      </S.InfoWrapper>
    </S.Container>
  );
};

export default SingleCountryContainer;

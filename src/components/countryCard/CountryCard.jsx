import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as S from "./CountryCard.styles";

const CountryCard = ({ url, title, population, region, capital, className }) => {
  const navigate = useNavigate();

  const formatPopulation = (population) => {
    return population.toLocaleString();
  };

  return (
    <S.Container
      className={className}
      onClick={() => {
        navigate(`/${title}`);
      }}
    >
      <S.Image url={url} />
      <S.InfoWrapper>
        <S.Title>{title}</S.Title>
        <S.Key>
          Population: <S.KeyDetails>{formatPopulation(population)}</S.KeyDetails>
        </S.Key>
        <S.Key>
          Region: <S.KeyDetails>{region}</S.KeyDetails>
        </S.Key>
        <S.Key>
          Capital: <S.KeyDetails>{capital}</S.KeyDetails>
        </S.Key>
      </S.InfoWrapper>
    </S.Container>
  );
};

CountryCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.array,
};

export default CountryCard;

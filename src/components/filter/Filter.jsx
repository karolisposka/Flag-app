import React from "react";
import PropTypes from "prop-types";
import * as S from "./Filter.styles";

const Filter = ({ handleChange }) => {
  return (
    <S.FilterContainer>
      <S.FilterIcon />
      <S.Input name="query" placeholder="search for a country..." onChange={(e) => handleChange(e.target.value)} />
    </S.FilterContainer>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Filter;

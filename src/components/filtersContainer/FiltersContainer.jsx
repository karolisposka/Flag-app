import React from "react";
import PropTypes from "prop-types";
import * as S from "./FiltersContainer.styles";

const FiltersContainer = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

FiltersContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FiltersContainer;

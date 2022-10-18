import React from "react";
import PropTypes from "prop-types";
import * as S from "./HomeContainer.styles";

const HomeContainer = ({ children }) => {
  return (
    <S.StyledContainer>
      <S.StyledContentSection>{children}</S.StyledContentSection>
    </S.StyledContainer>
  );
};

HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeContainer;

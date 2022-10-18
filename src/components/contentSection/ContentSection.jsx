import React from "react";
import PropTypes from "prop-types";
import * as S from "./ContentSection.styles";

const ContentSection = ({ children, className }) => {
  return <S.Section className={className}>{children}</S.Section>;
};

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default ContentSection;

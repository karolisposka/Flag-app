import React from "react";
import PropTypes from "prop-types";
import * as S from "./Container.styles";

const Container = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Container;

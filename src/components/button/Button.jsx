import React from "react";
import Proptypes from "prop-types";
import * as S from "./Button.styles";

const Button = ({ handleClick, children, arrow, className, type }) => {
  return (
    <S.Button onClick={handleClick} className={className} type={type}>
      {arrow && <S.ArrowLeft />}
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  type: Proptypes.oneOf(["submit", "button", "reset"]),
  handleClick: Proptypes.func.isRequired,
  children: Proptypes.node.isRequired,
  arrow: Proptypes.bool,
};

Button.defaultProps = {
  type: "button",
};

export default Button;

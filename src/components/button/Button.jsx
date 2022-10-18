import React from "react";
import * as S from "./Button.styles";

const Button = ({ handleClick, children, arrow, className }) => {
  return (
    <S.Button onClick={handleClick} className={className}>
      {arrow && <S.ArrowLeft />}
      {children}
    </S.Button>
  );
};

export default Button;

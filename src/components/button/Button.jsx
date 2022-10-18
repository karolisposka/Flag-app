import React from "react";
import * as S from "./Button.styles";

const Button = ({ handleClick, children, arrow }) => {
  return (
    <S.Button onClick={handleClick}>
      {arrow && <S.ArrowLeft />}
      {children}
    </S.Button>
  );
};

export default Button;

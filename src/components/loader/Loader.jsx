import React from "react";
import * as S from "./Loader.styles";

const Loader = () => {
  return (
    <S.Container>
      <S.Loader>
        <S.LoaderItem />
        <S.LoaderItem />
      </S.Loader>
    </S.Container>
  );
};

export default Loader;

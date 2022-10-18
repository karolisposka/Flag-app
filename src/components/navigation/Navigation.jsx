import React, { useContext } from "react";
import * as S from "./Navigation.styles";
import { themeContext } from "../../context";

const Navigation = () => {
  const [theme, setTheme] = useContext(themeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <S.StyledContainer>
      <S.StyledSection>
        <S.ContentWrapper>
          <S.Title>where in the world?</S.Title>
          <S.ThemeTogglerWrapper>
            {theme === "dark" ? (
              <S.Toggler
                onClick={() => {
                  toggleTheme();
                }}
              >
                <S.MoonIcon />
                <S.Span> Dark Mode </S.Span>
              </S.Toggler>
            ) : (
              <S.Toggler
                onClick={() => {
                  toggleTheme();
                }}
              >
                <S.sunIcon />
                <S.Span>Light Mode</S.Span>
              </S.Toggler>
            )}
          </S.ThemeTogglerWrapper>
        </S.ContentWrapper>
      </S.StyledSection>
    </S.StyledContainer>
  );
};

export default Navigation;

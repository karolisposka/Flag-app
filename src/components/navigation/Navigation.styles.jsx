import Styled from "styled-components";
import ContentSection from "../contentSection/ContentSection";
import Container from "../container/Container";
import { FaMoon } from "react-icons/fa";
import { TbSun } from "react-icons/tb";

export const StyledContainer = Styled(Container)`
  background-color:${(props) => props.theme.background.secondary};
  position:relative;
  box-shadow: ${(props) => props.theme.shadow.secondary};
`;

export const StyledSection = Styled(ContentSection)`
  padding:1rem;
`;

export const ContentWrapper = Styled.div`
  padding:1rem 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const Title = Styled.h1`
  font-weight:${(props) => props.theme.fonts.weight.hard};
  color:${(props) => props.theme.fonts.color.primary};
  margin:0;
  text-transform: capitalize;
  font-size:16px;

`;

export const ThemeTogglerWrapper = Styled.div`
  
  
`;

export const Toggler = Styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
`;

export const MoonIcon = Styled(FaMoon)`
  color:${(props) => props.theme.fonts.color.primary};
`;

export const sunIcon = Styled(TbSun)`
  color:${(props) => props.theme.fonts.color.primary};
`;

export const Span = Styled.span`
  color:${(props) => props.theme.fonts.color.primary};
  font-weight:${(props) => props.theme.fonts.weight.medium};
  margin-left:0.5rem;
`;

import Styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

export const Button = Styled.button`
    ${(props) => props.theme.fonts.color.primary};    

`;

export const ArrowLeft = Styled(FaArrowLeft)`
    

`;

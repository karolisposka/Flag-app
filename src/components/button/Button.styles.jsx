import Styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

export const Button = Styled.button`
    transition: 0.2s ease-in-out;
    color: ${(props) => props.theme.fonts.color.primary}; 
    box-shadow: ${(props) => props.theme.shadow.button};
    font-family:${(props) => props.theme.fonts.name.primary};
    background:${(props) => props.theme.background.secondary};
    display:flex;
    margin:1rem 0;
    border:none;
    align-items:Center;
    padding:0.25rem 1.5rem;
    border-radius:0.1rem;
`;

export const ArrowLeft = Styled(FaArrowLeft)`
    margin-right:0.25rem;
    font-size:0.7rem;

`;

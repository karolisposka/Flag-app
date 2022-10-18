import Styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const FilterContainer = Styled.div`
    background-color: ${(props) => props.theme.background.secondary};
    border-radius:0.25rem;
    padding:0.5rem;
    height:100%;
    margin:0.5rem 0;
    display:flex;
    align-items:center;
    @media(min-width:768px){
        padding:1rem;
        width:50%;
    }

`;

export const Input = Styled.input`
    background:transparent;
    color:${(props) => props.theme.fonts.color.primary};
    outline:none;
    border:none;
    width:100%;
    margin-left:1rem;
    &&::placeholder{
        color:${(props) => props.theme.fonts.color.primary};
    }
    @media(min-width:768px){
        width:50%;
    }

`;

export const FilterIcon = Styled(FaSearch)`
   color:${(props) => props.theme.fonts.color.primary};
   margin-left:1rem;

`;

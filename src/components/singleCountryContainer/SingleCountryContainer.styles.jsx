import Styled from "styled-components";
import Button from "../button/Button";

export const Container = Styled.div`
    background:${(props) => props.theme.background.primary};
    margin-top:2rem;

`;

export const Image = Styled.img`
    width:100%;
    
`;

export const Title = Styled.h2`
    color:${(props) => props.theme.fonts.color.primary};
    
    
`;

export const Key = Styled.p`
    color:${(props) => props.theme.fonts.color.primary};
    font-weight:${(props) => props.theme.fonts.weight.medium};
    &&:nth-of-type(5){
        margin-bottom:4rem;
    }
`;

export const Span = Styled.span`
    font-weight:${(props) => props.theme.fonts.weight.soft};
    

`;

export const List = Styled.div`
    
    
`;

export const BorderCountriesWrapper = Styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:0.5rem;
`;

export const StyledButton = Styled(Button)`
    display:inline-block;
    width:calc(33.33% - 1rem);
    
`;

import Styled from "styled-components";
import CountryCard from "../countryCard/CountryCard";

export const ListSection = Styled.section`
    padding:0 1rem;
    @media(min-width:768px){
        padding: 0;
    }
`;

export const List = Styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:4rem;    
`;

export const Notifcation = Styled.div`
    background:${(props) => props.theme.background.secondary};
    color:${(props) => props.theme.fonts.color.primary};
    border-radius:0.25rem;
    text-align:center;
    margin: 0 auto;
    padding:1rem;
    width:100%;
    

`;

export const StyledCountryCard = Styled(CountryCard)`
    width:100%;
    @media(min-width:568px) and (max-width: 767px){
        width: calc(50% - 4rem);
    }
    @media(min-width:768px) and (max-width:966px) {
        width:calc(33.33% - 2.7rem);
        margin:0;
    }
    @media(min-width:967px){
        width:calc(25% - 3rem);
        margin:0;

    }
`;

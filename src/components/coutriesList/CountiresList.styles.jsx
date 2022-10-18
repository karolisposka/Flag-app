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

export const StyledCountryCard = Styled(CountryCard)`
    width:100%;
    @media(min-width:768px) and (max-width:966px) {
        width:calc(33.33% - 2.5rem);
        margin:0;
    }
    @media(min-width:967px){
        width:calc(25% - 3rem);
        margin:0;

    }
`;

import Styled from "styled-components";
import CountryCard from "../countryCard/CountryCard";

export const ListSection = Styled.section`
    padding:0 1rem;
`;

export const List = Styled.div`
    display:flex;
    flex-wrap:wrap;    
`;

export const StyledCountryCard = Styled(CountryCard)`
    width:100%;
    @media(min-width:476px) and (max-width:767px){
        width:calc(50% - 2rem);
    }
    @media(min-width:768px){
        width:calc(33.33% - 2rem);
    }
    @media(min-width:967px){
        width:calc(25% - 4rem);
        margin:2rem;
    }
`;

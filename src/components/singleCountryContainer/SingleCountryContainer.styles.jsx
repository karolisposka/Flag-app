import Styled from "styled-components";
import Button from "../button/Button";

export const Container = Styled.div`
    background:${(props) => props.theme.background.primary};
    margin-top:2rem;
    width:100%;
    @media(min-width:768px){
        display:flex;
        align-items:start;
        min-height:80vh;
    }
`;

export const Image = Styled.div`
    height:16.25rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width:100%;
    transition:0.3s ease-in-out;
    box-shadow:${(props) => props.theme.shadow.wide};
    background-image: url(${(props) => props.url});
    @media(min-width:768px){
       width:50%;
       height:25rem;
    }
`;

export const InfoWrapper = Styled.div`
     @media(min-width:768px){
        margin-left:5rem;
    }
`;

export const Title = Styled.h2`
    color:${(props) => props.theme.fonts.color.primary};
    margin:1rem 0;
    &&:nth-of-type(2){
        font-weight:${(props) => props.theme.fonts.weight.strong};
        font-size:16px;
        margin:1rem 0;
        @media(min-width:768px){
            font-size:14px;
            display:inline;
            margin-right:0.5rem;
            
        }
        &&:after{
            content: ':'
        }
    }
`;

export const Text = Styled.div`
    width:100%;
    @media(min-width:768px){
        display:flex;
        align-items:start;
    }
`;

export const TextSection = Styled.section`
    &:nth-of-type(2){
        margin-top:2rem;
    }
    @media(min-width:768px){
        width:50%;
        &:nth-of-type(2){
        margin-left:5rem;
        margin-top:0;
        }
    }
    
    
`;

export const Key = Styled.p`
    color:${(props) => props.theme.fonts.color.primary};
    font-weight:${(props) => props.theme.fonts.weight.medium};
`;

export const Span = Styled.span`
    font-weight:${(props) => props.theme.fonts.weight.soft};
    

`;

export const List = Styled.div`
    margin:0;
    
`;

export const BorderCountriesWrapper = Styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:0.5rem;
    @media(min-width:768px){
        display:inline;
    }
`;

export const StyledButton = Styled(Button)`
    display:inline-block;
    text-align:center;
    width:calc(33.33% - 0.45rem);
    margin: 0rem;
    @media(min-width:768px){
        width:20%;
        margin:0.25rem;
    }
    
`;

export const NoData = Styled.div`
    background:${(props) => props.theme.background.secondary};
    width:100%;
    padding:1rem;
    text-align:center;
    color:${(props) => props.theme.fonts.color.primary};
    @media(min-width:768px){
        display:inline;
        padding:0.25rem 2rem;
        border-radius:0.25rem;
    }
`;

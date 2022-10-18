import Styled from "styled-components";

export const Container = Styled.div`
    width:calc(100% - 1rem);
    margin:1rem;
    overflow:hidden;
    border-radius:0.25rem;
    background:${(props) => props.theme.background.secondary};
    box-shadow: ${(props) => props.theme.shadow.primary};
`;

export const Image = Styled.div`
    height:10rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.url});
    @media(min-width:768px){
        height:9rem;
    }
`;

export const FlagImg = Styled.img`
    max-width:  100%;
    height: 10rem;
    object-fit: fill;
    margin-bottom: 2rem;
`;

export const InfoWrapper = Styled.div`
    margin:2rem;
    color:${(props) => props.theme.fonts.color.primary};
`;

export const Title = Styled.h3`
   
`;

export const KeyDetails = Styled.span`
    font-weight:${(props) => props.theme.fonts.weight.soft};

`;

export const Key = Styled.p`
    font-weight:${(props) => props.theme.fonts.weight.medium};
`;

import Styled from "styled-components";

export const Notifcation = Styled.div`
    background:${(props) => props.theme.background.secondary};
    color:${(props) => props.theme.fonts.color.primary};
    border-radius:0.25rem;
    text-align:center;
    margin: 0 auto;
    padding:1rem;
    width:calc(100% - 2rem);
    

`;

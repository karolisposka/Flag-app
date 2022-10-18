import Styled from "styled-components";
import Container from "../container/Container";
import ContentSection from "../contentSection/ContentSection";

export const StyledContainer = Styled(Container)`
    background-color:${(props) => props.theme.background.primary};
    min-height:90vh;
`;

export const StyledContentSection = Styled(ContentSection)`
    padding:1rem;
`;

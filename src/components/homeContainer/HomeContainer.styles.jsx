import Styled from "styled-components";
import Container from "../container/Container";
import ContentSection from "../contentSection/ContentSection";

export const StyledContainer = Styled(Container)`
    background-color:${(props) => props.theme.background.primary};
`;

export const StyledContentSection = Styled(ContentSection)`
    padding:1rem;
`;
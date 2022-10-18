import Styled from "styled-components";
import Select from "react-select";

export const StyledSelect = Styled(Select)`
    width:50%;
    margin: 2rem 0;
    @media(min-width:768px){
        width:20%;
        padding:0.5rem;
    }
`;

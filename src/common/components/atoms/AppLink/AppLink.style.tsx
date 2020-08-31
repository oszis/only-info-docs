import styled from 'styled-components';
import {Link} from "react-router-dom";

export const StyledFlexContainer = styled.div`
display: flex;
flex-flow: column wrap;
align-items: flex-start;
justify-content: flex-start;
`
export const StyledLink = styled(Link)`
    display: inline-block;
`;
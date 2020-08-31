import React from "react";
import {Link} from "react-router-dom";
import {StyledLink, StyledFlexContainer} from "../../common/components/atoms/AppLink/AppLink.style";

const ArticlesPage: React.FC = (props) => {
    return (
        <>
            <StyledFlexContainer>
                <StyledLink to='/1'>Что происходит когда заходим на сайт</StyledLink>
                <StyledLink to='/2'>Что такое клиент</StyledLink>
                <StyledLink to='/3'>Что такое сервер</StyledLink>
                <StyledLink to='/4'>Что такое фронтенд</StyledLink>
                <StyledLink to='/5'>Что такое бэкенд</StyledLink>
            </StyledFlexContainer>
        </>
    );
}

export default ArticlesPage;
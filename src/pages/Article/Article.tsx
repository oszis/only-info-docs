import React from "react";
import {RouteChildrenProps} from "react-router-dom";

const ArticlePage: React.FC<RouteChildrenProps> = (props) => {
    const {location: {pathname}} =props;
    return (
        <div>{pathname}</div>
    );
}

export default ArticlePage;
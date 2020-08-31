import React from 'react';
import {Container, Layout} from './MainLayout.style';

export const MainLayout: React.FC = ({children}) => {
    return (
        <Layout>
            <Container>{children}</Container>
        </Layout>
    )
}
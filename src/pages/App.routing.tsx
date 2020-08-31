import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {MainLayout} from '../common/components/templates/MainLayout/MainLayout';

const ArticlePage = React.lazy(() => import('./Article/Article'));
const ArticlesPage = React.lazy(() => import('./Articles/Articles'));

function AppRouting() {
    return (
        <MainLayout>
            <React.Suspense fallback={<div>loading</div>}>
                <Router>
                    <Switch>
                        <Route path="/:id" component={ArticlePage}/>
                        <Route path="/" exact component={ArticlesPage}/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                </Router>
            </React.Suspense>
        </MainLayout>
    );
}

export default AppRouting;

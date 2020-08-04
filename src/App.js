import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import UserPage from './pages/UserPage';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/user/:username" component={UserPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
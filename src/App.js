import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import UserPage from './pages/UserPage';
import { Head } from './components';
import { GlobalStyle } from './styles';

const App = () => {
    return (
        <div>
            <Head />
            <BrowserRouter>
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/user/:username" component={UserPage} />
                </Switch>
            </BrowserRouter>
        </div>
        
    )
}

export default App;
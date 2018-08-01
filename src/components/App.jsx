import React from 'react'
import { BrowserRouter, Route, Link, Navlink, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NotesPage from './NotesPage';
import SignupPage from './SignupPage';
import FourOFour from './404Page';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/notes" component={NotesPage}/>
                    <Route path="/signup" component={SignupPage}/>
                    <Route component={FourOFour}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
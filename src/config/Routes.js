import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import Chat from '../containers/home/Chat';
class Routes extends Component {
    render() { 
        return (
            <Router>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>


            </Router>
          );
    }
}
 
export default Routes;
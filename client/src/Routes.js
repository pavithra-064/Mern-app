import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
 
import home from "./home";
import url from "./url";
import register from "./register";
import history from './history';
 
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/register" component={register} />
                    <Route path="/url" exact component={url} />  
                 
                   
 
                </Switch>
            </Router>
        )
    }
}
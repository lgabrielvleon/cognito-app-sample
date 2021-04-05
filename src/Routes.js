import React from 'react';
import { Switch } from "react-router"
import AppliedRoute from './components/AppliedRoute'
import Auth from './components/Auth';
import Home from './components/Home';
import Signup from './components/Signup'

const Routes = ({ childProps}) => {
    return(
        <Switch>
            <AppliedRoute path="/" exact component={Home} props={childProps}/>
            <AppliedRoute path="/login" exact component={Auth} props={childProps}/>
            <AppliedRoute path="/singup" exact component={Signup} props={childProps}/>
        </Switch>
    )
}

export default Routes

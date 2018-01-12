import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '././components/LandingPage/LandingPage';
import Home from '././components/Home/Home';
import Goal from './components/Goal/Goal';
import CreateGoal from './components/Create/CreateGoal';



export default (
    <Switch>
        <Route exact path="/(access_token.*)?" component={ LandingPage }/>
        <Route path="/home" component={ Home }/>
        <Route path="/goal/:goalsid" component={ Goal }/>
        <Route path="/Create" component={ CreateGoal }/>
    </Switch>
)
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '././components/LandingPage/LandingPage';
import Home from '././components/Home/Home';
import Goal from './components/Goal/Goal';
import CreateGoal from './components/Create/CreateGoal';
import Modal from './components/Goal/Modal';



export default (
    <Switch>
        <Route exact path="/(access_token.*)?" component={ LandingPage }/>
        {/* <Route exact path="/" component={ LandingPage }/> */}
        <Route path="/home" component={ Home }/>
        <Route path="/goal/:goalsid" component={ Goal }/>
        <Route path="/goal/:goalsid" component={ Modal }/>
        <Route path="/Create" component={ CreateGoal }/>
    </Switch>
)
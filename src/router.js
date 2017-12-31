import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '././components/LandingPage/LandingPage';
import Home from '././components/Home/Home';


export default (
    <Switch>
        <Route exact path="/" component={ LandingPage }/>
        <Route exact path="/home" component={ Home }/>
        {/* <Route exact path="/goal/:id" component={ Goal }/> */}
    </Switch>
)
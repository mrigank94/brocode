import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import PrimarySearchAppBar from "./components/appBar";
import HomePage from "./components/homePage";
import CollaboratorsPage from "./components/collaboratorsPage";
import MeetingPage from "./components/meetingPage";
import Profile from "./components/profile";
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <>
            <PrimarySearchAppBar/>
            <Switch>
                <Route path='/tech-details' component={CollaboratorsPage}/>
                <Route path='/join' component={MeetingPage}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/' component={HomePage}/>
            </Switch>
        </>
);
}

export default App;

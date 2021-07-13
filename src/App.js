import React, { useState } from 'react';
import {Switch, Route,} from "react-router-dom";
import './App.css';
import CustomerPage from "./Pages/CustomerPage";
import NewServicePage from "./Pages/NewServicePage";
import NewMachinePage from "./Pages/NewMachinePage";
import NewEmployeePage from "./Pages/NewEmployeePage";


function App() {
    return (
        <>
            <Switch >
                <Route exact path="/">
                    <CustomerPage/>
                </Route>

                <Route exact path="/nieuwe-machine">
                   <NewMachinePage/>
                </Route>

                <Route exact path="/nieuwe-dienst">
                    <NewServicePage/>
                </Route>

                <Route exact path="/nieuwe-medewerker">
                   <NewEmployeePage/>
                </Route>
            </Switch>
        </>
    );
}

export default App;

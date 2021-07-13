import React, { useState, createContext } from 'react';
import {Switch, Route,} from "react-router-dom";
import './App.css';
import CustomerPage from "./Pages/CustomerPage";
import NewServicePage from "./Pages/NewServicePage";
import NewMachinePage from "./Pages/NewMachinePage";
import NewEmployeePage from "./Pages/NewEmployeePage";
import MachinesPage from "./Pages/MachinesPage";
import MachinePage from "./Pages/MachinePage";
import JobPage from "./Pages/JobPage";
import JobsPage from "./Pages/JobsPage";

const InvisbleGardeningContext = createContext({ });

function App() {
    return (
      <InvisbleGardeningContext.Provider>
        <>
            <Switch >
                <Route exact path="/">
                    <CustomerPage/>
                </Route>

                <Route exact path="/machines">
                    <MachinesPage/>
                </Route>

                <Route exact path="/machine">
                    <MachinePage/>
                </Route>

                <Route exact path="/nieuwe-machine">
                   <NewMachinePage/>
                </Route>

                <Route exact path="/diensten">
                    <JobsPage/>
                </Route>

                <Route exact path="/dienst">
                    <JobPage/>
                </Route>

                <Route exact path="/nieuwe-dienst">
                    <NewServicePage/>
                </Route>

                <Route exact path="/nieuwe-medewerker">
                   <NewEmployeePage/>
                </Route>
            </Switch>
        </>
      </InvisbleGardeningContext.Provider>
    );
}

export default App;

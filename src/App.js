import React, { useState } from 'react';
import {Switch, Route,} from "react-router-dom";
import './App.css';
import RequestPage from "./Pages/RequestPage";
import NewServicePage from "./Pages/NewServicePage";
import NewMachinePage from "./Pages/NewMachinePage";
import NewEmployeePage from "./Pages/NewEmployeePage";
import MachinesPage from "./Pages/MachinesPage";
import MachinePage from "./Pages/MachinePage";
import JobPage from "./Pages/JobPage";
import JobsPage from "./Pages/JobsPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import NavigatieBar from "./Header/NavigatieBar";
import HomePage from "./Pages/HomePage";
import ReviewPage from "./Pages/ReviewPage";
import QuotePage from "./Pages/QuotePage";



function App() {
    return (
      <>
          <div className={"background"}>
              <NavigatieBar/>
              <Switch >
                  <Route exact path="/">
                      <HomePage/>
                  </Route>

                  <Route exact path="/request">
                      <RequestPage/>
                  </Route>

                  <Route exact path="/login">
                      <LoginPage/>
                  </Route>

                  <Route exact path="/signup">
                      <SignUpPage/>
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

                  <Route exact path="/review">
                      <ReviewPage/>
                  </Route>

                  <Route exact path="/jobs">
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

                  <Route exact path="/quote">
                      <QuotePage/>
                  </Route>
              </Switch>
          </div>
      </>
    );
}

export default App;

import {Switch, Route,} from "react-router-dom";
import './App.css';
import NewRequestPage from "./Pages/NewRequestPage";
import NewJobPage from "./Pages/NewJobPage";
import NewMachinePage from "./Pages/NewMachinePage";
import NewEmployeePage from "./Pages/NewEmployeePage";
import MachinesPage from "./Pages/MachinesPage";
import MachinePage from "./Pages/MachinePage";
import JobPage from "./Pages/JobPage";
import JobsPage from "./Pages/JobsPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import NavBar from "./Header/NavBar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import CustomerDataPage from "./Pages/CustomerDataPage";
import ReviewPage from "./Pages/ReviewPage";
import EmployeesPage from "./Pages/EmployeesPage";
import EmployeePage from "./Pages/EmployeePage";
import PicturesPage from "./Pages/PicturesPage";
import NewPicturePage from "./Pages/NewPicturePage";
import ReviewsPage from "./Pages/ReviewsPage";
import RequestsPage from "./Pages/RequestsPage";
import RequestPage from "./Pages/RequestPage";
import NewQuotePage from "./Pages/NewQuotePage";
import QuotesPage from "./Pages/QuotesPage";
import QuotePage from "./Pages/QuotePage";

function App() {

    return (
      <>

          <div
              className={"background"} >

              <NavBar/>

              <Switch >

                  <Route exact path="/">
                      <HomePage/>
                  </Route>

                  <Route exact path="/new_request">
                      <NewRequestPage/>
                  </Route>

                  <Route exact path="/requests">
                      <RequestsPage/>
                  </Route>

                  <Route path="/request/:request_id">
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

                  <Route path="/machine/:machine_id">
                      <MachinePage/>
                  </Route>

                  <Route exact path="/new-machine">
                      <NewMachinePage/>
                  </Route>

                  <Route exact path="/contact">
                      <ContactPage/>
                  </Route>

                  <Route exact path="/jobs">
                      <JobsPage/>
                  </Route>

                  <Route exact path="/new-job">
                      <NewJobPage/>
                  </Route>

                  <Route path="/jobs/:job_id">
                      <JobPage/>
                  </Route>

                  <Route exact path="/employees">
                      <EmployeesPage/>
                  </Route>

                  <Route exact path="/pictures">
                      <PicturesPage/>
                  </Route>

                  <Route exact path="/new-picture">
                      <NewPicturePage/>
                  </Route>

                  <Route exact path="/new-employee">
                      <NewEmployeePage/>
                  </Route>

                  <Route path="/employees/:employee_id">
                      <EmployeePage/>
                  </Route>

                  <Route exact path="/new_quote">
                      <NewQuotePage/>
                  </Route>

                  <Route exact path="/quotes">
                      <QuotesPage/>
                  </Route>

                  <Route path="/quote/:quote_id">
                      <QuotePage/>
                  </Route>

                  <Route exact path="/customer-data">
                      <CustomerDataPage/>
                  </Route>

                  <Route exact path="/review">
                      <ReviewPage/>
                  </Route>

                  <Route exact path="/reviews">
                      <ReviewsPage/>
                  </Route>

              </Switch>

          </div>

      </>

    );

}

export default App;

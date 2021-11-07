import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import ContextFormProvider from "./Context/FormContext";
import AuthContextProvider from "./Context/AuthContext";

ReactDOM.render(

    <React.StrictMode>

        <Router>

          <AuthContextProvider>

              <ContextFormProvider>

                  <App />

              </ContextFormProvider>

          </AuthContextProvider>

      </Router>

  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();

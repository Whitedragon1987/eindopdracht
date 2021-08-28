import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import ContextFormProvider from "./Context/FormContext";
import AuthContextProvider from "./Context/AuthContext";
import PictureContext from "./Context/PictureContext";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <AuthContextProvider>
              <ContextFormProvider>
                  <PictureContext>
                      <App />
                  </PictureContext>
              </ContextFormProvider>
          </AuthContextProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

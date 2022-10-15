import React from 'react';

import { Switch, Route } from "react-router-dom";

import "./styles/tailwind.output.css";
import LandingPage from './pages/index';
import AboutUs from './pages/about-us';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`}>
        <LandingPage />
      </Route>
      {/* <Route path="/about-us">
        <AboutUs />
      </Route> */}
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/sign-up">
        <RegisterPage />
      </Route>
    </Switch>
  );
}

export default App;

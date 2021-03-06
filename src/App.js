import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Head from './components/Header'
import LoginPage from "./pages/Login-page";
import PlaylistPage from "./pages/Play-list";


const App = () => {
  const [classValue, setClassName] = useState("items-center");
  
  return (
    <Router>
      <Head className={classValue} />
      <Switch>
        <Route path="/playlist/:uuid">
          <PlaylistPage />
        </Route>
        <Route path="/playlist">
          <PlaylistPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

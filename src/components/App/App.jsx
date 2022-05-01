import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cv from "../../pages/Cv/Cv";
import Qui from "../../pages/Qui/Qui";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={Cv} />
          <Route path="/qui" component={Qui} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;

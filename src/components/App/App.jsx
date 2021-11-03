import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Cv from "../../pages/Cv/Cv";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/cv" component={Cv} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;

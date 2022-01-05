import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Home from "../../pages/Home/Home";
//import Cv from "../../pages/Cv/Cv";
import "./App.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const Cv = lazy(() => import("../../pages/Cv/Cv"));

function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cv" component={Cv} />
          </Switch>
        </Router>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;

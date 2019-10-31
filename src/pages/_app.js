import React from "react";
import FooPage from "./foo";
import BarPage from "./bar";
import { Switch, Route, Router, Link } from "./../util/router.js";
import "./../util/analytics.js";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/tikanpolo" component={LandingPage} />

        <Route exact path="/tikankolo" component={BarPage} />

        <Route
          component={({ location }) => {
            return (
              <div style={styling}>
                <h1 className="title">Ei löytyny</h1>
                <Link to="/tikanpolo" className="has-text-danger">
                  Palaa takaisin
                </Link>
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}
const styling = {
  color: "white",
  backgroundColor: "black",
  padding: "50px",
  width: "100%",
  height: "100%",
  textAlign: "center"
};

const LandingPage = () => (
  <div style={styling}>
    <h1 className="title has-text-danger">Oletko oikeassa osoitteessa?</h1>
  </div>
);

export default App;

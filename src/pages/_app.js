import React from "react";
import FooPage from "./foo";
import BarPage from "./bar";
import { Switch, Route, Router } from "./../util/router.js";
import "./../util/analytics.js";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/foo" component={FooPage} />

        <Route exact path="/bar" component={BarPage} />

        <Route
          component={({ location }) => {
            return (
              <div
                style={{ padding: "50px", width: "100%", textAlign: "center" }}
              >
                The page <code>{location.pathname}</code> could not be found.
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;

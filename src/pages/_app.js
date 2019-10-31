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
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "50px",
                  width: "100%",
                  height: "100%",
                  textAlign: "center"
                }}
              >
                <h1 className="title">Ei löytyny</h1>
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;

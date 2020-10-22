import React from "react";
import "./App.css";
import { Users } from "./pages/Users";
import { UserRoute } from "./pages/User";
import { Four0Four } from "./pages/Four0Four";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path="/user/:id">
            <UserRoute />
          </Route>
          <Route>
            <Four0Four></Four0Four>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

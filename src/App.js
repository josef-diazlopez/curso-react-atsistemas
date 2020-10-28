import React from "react";
import "./App.css";
import { Users } from "./pages/Users";
import { UserRoute } from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Four0Four } from "./pages/Four0Four";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/user/:id">
            <UserRoute />
          </Route>
          <Route>
            <Four0Four />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

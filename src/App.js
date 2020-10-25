import React from "react";
import "./App.css";
import { Users } from "./pages/Users";
import { UserRoute } from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FourOFour } from "./pages/FourOFour";
import { FormRoute } from "./pages/Form";

function App() {
  return (
    <div className="App">
      {/* <Users></Users> */}
      {/* <User></User> */}
      <Router>
        <Switch>
          <Route path="/">
            <Users></Users>
          </Route>

          <Route path="/user/alta">
            <FormRoute></FormRoute>
          </Route>

          <Route path="/user/editar/:id">
            <FormRoute></FormRoute>
          </Route>

          <Route path="/user/:id">
            <UserRoute></UserRoute>
          </Route>

          <Route>
            <FourOFour></FourOFour>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Users, UsersThemable } from "./pages/Users";
import { UserRoute } from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FourOFour } from "./pages/FourOFour";
import { FormRoute } from "./pages/Form";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";

function App() {
  return (
    <ThemeSelector>
      <div className="App">
        {/* <Users></Users> */}
        {/* <User></User> */}
        <Router>
          <Switch>
            <Route path="/user/alta">
              <FormRoute></FormRoute>
            </Route>

            <Route path="/user/editar/:id">
              <FormRoute></FormRoute>
            </Route>

            <Route path="/user/:id">
              <UserRoute></UserRoute>
            </Route>

            <Route path="/">
              <UsersThemable></UsersThemable>
            </Route>

            <Route>
              <FourOFour></FourOFour>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeSelector>
  );
}

export default App;

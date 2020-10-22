import React from "react";
import "./App.css";
import { Users } from "./pages/Users";
import { UserRouter } from './pages/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Users></Users> */}
        {/* <User></User> */}
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/user2/:id" exact>
            <Users />
          </Route>
          <Route path="/user/:id" exact>
            <UserRouter></UserRouter>
          </Route>
          <Route >
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Users } from './pages/Users';
import { UserRoute } from './pages/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Four0four } from './pages/Four0four';


function App() {
  return (
    <div className="App">
      {/*<Users></Users>*/}
      {/* <User></User>*/}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/user/:id" exact>
            <UserRoute />
          </Route>
          <Route >
            <Four0four />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

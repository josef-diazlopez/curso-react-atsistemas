import React from "react";
import "./App.css";
import { Users } from "./pages/Users";
import {UserRouter} from './pages/User'
import {Four0Four} from './pages/Four0Four'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/user/:id" exact>
          <UserRouter/>
        </Route>
        <Route>
          <Four0Four/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

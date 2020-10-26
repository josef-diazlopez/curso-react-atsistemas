import React from "react";
import "./App.css";
import { Users, UserWithTeme } from "./pages/Users";
import {UserRouter} from './pages/User'
import {Four0Four} from './pages/Four0Four'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {ThemeSelector} from './components/ThemeSelector/ThemeSelector'


function App() {
  return (
    <ThemeSelector>
    <div className="App">
      <Router>
      <Switch>
      <Route path="/" exact>
          <UserWithTeme/>
        </Route>
        <Route path="/user/:id" exact>
          <UserRouter/>
        </Route>
        <Route path="/user2/:id" exact>
          <UserWithTeme/>
        </Route>
        <Route>
          <Four0Four/>
        </Route>
      </Switch>
      </Router>
    </div>
    </ThemeSelector>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Users, UsersThemable, UsersWithTheme } from './pages/Users';
import { UserRoute } from './pages/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Four0four } from './pages/Four0four';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';



function App() {
  return (
    <ThemeSelector>
      <div className="App">
        {/*<Users></Users>*/}
        {/* <User></User>*/}
        <Router>
          <Switch>
            <Route path="/" exact>
              <UsersWithTheme />
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
    </ThemeSelector>
  );
}

export default App;

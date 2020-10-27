import React from 'react';
import './App.css';
import { Users, UsersThemable, UsersWithTheme } from './pages/Users';
import { UserRoute, UserRedux } from './pages/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Four0four } from './pages/Four0four';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';

// Redux
import { Provider } from "react-redux";
import { createStore } from "./store/store";


const PageRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <UsersWithTheme />
      </Route>
      <Route path="/user/:id" exact>
        <UserRedux />
      </Route>
      <Route >
        <Four0four />
      </Route>
    </Switch>
  </Router>
)

function App() {
  return (
    <Provider store={createStore()}>
      <ThemeSelector>
        <div className="App">
          {/*<Users></Users>*/}
          {/* <User></User>*/}
          <PageRouter />
        </div>
      </ThemeSelector>
    </Provider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { UsersWithTheme, Users } from "./pages/Users";
import { UserRedux, UserRouter } from './pages/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";

import { Provider } from 'react-redux';
import { createStore } from './store/store';

const PageRouter = () => {
  return (
    <Router>
      {/* <Users></Users> */}
      {/* <User></User> */}
      <Switch>
        <Route path="/" exact>
          <UsersWithTheme />
        </Route>
        <Route path="/user2/:id" exact>
          <UserRedux />
        </Route>
        <Route path="/user/:id" exact>
          <UserRouter></UserRouter>
        </Route>
        <Route >
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

function App() {
  return (
    // no sabemos si va dentro de ThemeSelector o fuera
    <Provider store={createStore()}>
      <ThemeSelector>
        <div className="App">
          <PageRouter></PageRouter>
        </div>
      </ThemeSelector>
    </Provider>
  );
}

export default App;

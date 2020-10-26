import React from "react";
import "./App.css";
import { Users, UsersThemable } from "./pages/Users";
import { UserRedux, UserRoute } from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FourOFour } from "./pages/FourOFour";
import { FormRoute } from "./pages/Form";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";
import { Provider } from "react-redux";
import { createStore } from "./store/store";

const PageRouter = () => (
  <Router>
    <Switch>
      <Route path="/user/alta">
        <FormRoute></FormRoute>
      </Route>

      <Route path="/user/editar/:id">
        <FormRoute></FormRoute>
      </Route>

      <Route path="/user/:id">
        <UserRedux></UserRedux>
      </Route>

      <Route path="/">
        <UsersThemable></UsersThemable>
      </Route>

      <Route>
        <FourOFour></FourOFour>
      </Route>
    </Switch>
  </Router>
);

function App() {
  return (
    <Provider store={createStore()}>
      <ThemeSelector>
        <div className="App">
          {/* <Users></Users> */}
          {/* <User></User> */}
          <PageRouter></PageRouter>
        </div>
      </ThemeSelector>
    </Provider>
  );
}

export default App;

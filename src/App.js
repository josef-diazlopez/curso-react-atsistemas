import React from "react";
import "./App.css";
import { UsersWithTheme } from "./pages/Users";
import { UserRoute } from "./pages/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Four0Four } from "./pages/Four0Four";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";
import { Provider } from "react-redux";
import { createStore } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={createStore()}>
        <ThemeSelector>
          <Router>
            <Switch>
              <Route path="/" exact>
                <UsersWithTheme />
              </Route>
              <Route path="/user/:id">
                <UserRoute />
              </Route>
              <Route>
                <Four0Four />
              </Route>
            </Switch>
          </Router>
        </ThemeSelector>
      </Provider>
    </div>
  );
}

export default App;

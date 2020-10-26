import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {FourFour} from "./pages/FourFour.jsx";
import { UsersRedux } from "./pages/Users";
import {UserRedux} from './pages/User';
import {ThemeSelector, themeSelector} from './components/ThemeSelector/ThemeSelector';
import { Provider } from 'react-redux'
import {createStore} from './store/store'
//import { createStore } from "redux";

const PageRouter = () => {
return(
  <div className="App">
   <Router>
   <Switch>
     <Route exact path="/">
    <UsersRedux/>
     </Route>
     <Route exact path="/user/:id" >
    <UserRedux/>
     </Route>
     <Route>
       <FourFour/>
     </Route>
   </Switch>
   </Router>
  </div>
)}

function App() {
  return (
  <Provider store={createStore()}>
       <ThemeSelector>
   <PageRouter></PageRouter>
   </ThemeSelector>
   </Provider>
  );
}

export default App;

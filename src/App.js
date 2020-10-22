import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {FourFour} from "./pages/FourFour.jsx";
import { Users } from "./pages/Users";
import UserRoute from './pages/User'


function App() {
  return (
    <div className="App">
     { /*<Users></Users>
     <User/>
     */ }
     <Router>
     <Switch>
       <Route exact path="/">
      <Users/>
       </Route>
       <Route exact path="/user/:id" >
      <UserRoute/>
       </Route>
       <Route>
         <FourFour/>
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;

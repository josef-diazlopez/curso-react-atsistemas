import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Users } from './pages/Users'
import { UserRoute } from './pages/User'
import ErrorPage from './pages/ErrorPage'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    <Route path="/user/:id">
                        <UserRoute />
                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

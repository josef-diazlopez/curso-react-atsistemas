import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import './App.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'
import { Users, UsersWithTheme } from '../../pages/Users'
import { UserRoute } from '../../pages/User'
import ErrorPage from '../../pages/ErrorPage'
import { ThemeProvider } from '../../theme/theme'
import { ThemeSelector } from '../ThemeSelector/ThemeSelector'

import { Provider } from 'react-redux'
import { createStore } from '../../store/store'

const PageRouter = () => {
    return (
        <Router>
            <Route
                render={({ location, history }) => (
                    <div className="App">
                        <SideNav
                            style={{
                                background: 'cornflowerblue',
                                position: 'fixed',
                            }}
                            onSelect={(selected) => {
                                const to = selected
                                if (location.pathname !== to) {
                                    history.push(to)
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="/">
                                <NavItem eventKey="/">
                                    <NavIcon>
                                        <FiUsers />
                                    </NavIcon>
                                    <NavText>Users</NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={() => <UsersWithTheme />}
                            />
                            <Route
                                path="/user/:id"
                                component={() => <UserRoute />}
                            />
                            <Route component={() => <ErrorPage />} />
                        </Switch>
                    </div>
                )}
            />
        </Router>
    )
}

function App() {
    return (
        <Provider store={createStore()}>
            <PageRouter />
        </Provider>
    )
}

/*function App() {
    return (
        <ThemeSelector>
            <PageRouter />
        </ThemeSelector>
    )
}*/

export default App

import React, { useState } from 'react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { Route, Switch } from 'react-router-dom'
import { UserRoute } from '../../pages/User'
import ErrorPage from '../../pages/ErrorPage'
import { UsersWithTheme } from '../../pages/Users'
import { FiUsers } from 'react-icons/fi'
import { BsMoon, BsSun } from 'react-icons/bs'
import { ThemeProvider } from '../../theme/theme'

export const MainNav = (props) => {
    const [isDark, setDark] = useState(false)
    const handleMode = () => {
        setDark(!isDark)
    }
    return (
        <>
            <ThemeProvider value={{ dark: !isDark }}>
                <SideNav
                    style={{
                        background: 'cornflowerblue',
                        position: 'fixed',
                    }}
                    onSelect={(selected) => {
                        const to = selected
                        if (props.location.pathname !== to) {
                            props.history.push(to)
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
                        <NavItem onClick={handleMode}>
                            <NavIcon>{isDark ? <BsMoon /> : <BsSun />}</NavIcon>
                            <NavText>
                                {isDark
                                    ? 'Change to Light Mode'
                                    : 'Change to Dark Mode'}
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <UsersWithTheme />}
                    />
                    <Route path="/user/:id" component={() => <UserRoute />} />
                    <Route component={() => <ErrorPage />} />
                </Switch>
            </ThemeProvider>
        </>
    )
}

export default MainNav

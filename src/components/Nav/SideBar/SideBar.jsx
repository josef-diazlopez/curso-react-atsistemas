import React, { useState } from 'react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { Route, Switch } from 'react-router-dom'
import { UserRoute } from '../../../pages/User'
import ErrorPage from '../../../pages/ErrorPage'
import { UsersWithTheme } from '../../../pages/Users'
import { FiUsers } from 'react-icons/fi'
import { ThemeProvider } from '../../../theme/theme'
import { NavBar } from '../NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    style: {
        background: 'cornflowerblue',
        position: 'fixed',
    },
    darkStyle: {
        background: '#282c34',
        position: 'fixed',
    },
}))

export const SideBar = (props) => {
    const [isDark, setDark] = useState(false)
    const handleMode = (e) => setDark(e)
    const classes = useStyles()
    return (
        <>
            <ThemeProvider value={{ dark: !isDark }}>
                <SideNav
                    className={isDark ? classes.darkStyle : classes.style}
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
                    </SideNav.Nav>
                </SideNav>
                <NavBar {...props} setDark={(e) => handleMode(e)} />
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

export default SideBar

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeProvider } from '../../../theme/theme'
import Brightness4 from '@material-ui/icons/Brightness4'
import Brightness7 from '@material-ui/icons/Brightness7'

const USERS = '/'
const USER = '/user/'

const pathNames = {
    [USERS]: 'Users',
    [USER]: 'User',
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    style: {
        background: '#6495ed',
    },
    darkStyle: {
        background: '#282c34',
    },
}))

export const NavBar = (props) => {
    const [isDark, setDark] = useState(true)
    const handleMode = () => {
        setDark(!isDark)
        props.setDark(isDark)
    }
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ThemeProvider value={{ dark: !isDark }}>
                <AppBar
                    position="static"
                    className={!isDark ? classes.darkStyle : classes.style}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" className={classes.title}>
                            {pathNames[props.location.pathname]}
                        </Typography>
                        <IconButton
                            edge="end"
                            aria-label="alternar tema claro/oscuro"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMode}
                        >
                            {isDark ? <Brightness4 /> : <Brightness7 />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    )
}

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';
import { useGetUsers } from './../hooks/users/useGetUsers';
import {UserRouter} from './User';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { themeContext, withTheme } from '../theme/Theme';
import { connect } from 'react-redux';

export const Users = ({ theme, ...props }) => {

    // const theme = useContext(themeContext);

    const data = useGetUsers();

    return (
        <header className="App-header" style={{ backgroundColor: (theme.isDark) ? 'black' : 'white' }}>
        <Switch>
            <Route path="/user2/:id">
                <UserRouter/>
            </Route>
        </Switch>
        {
            data.map((user) => (
                <Card name={`${user.first_name} ${user.last_name}`} id={user.id} key={user.id}>
                    <Body id={user.id} texts={[user.email]}></Body>
                </Card>
            ))
        }

      </header>
    );
};


Users.propTypes = {

}

Users.defaultProps = {

}

export const UsersWithTheme = withTheme(Users);

const mapStateToProps = (state /*, ownProps*/) => {
    return{
        counter: state.counter
    }
}

export const UserConnected = connect(mapStateToProps)(UsersWithTheme);
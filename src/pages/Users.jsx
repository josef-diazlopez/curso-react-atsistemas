import React, { useEffect, useState } from 'react';
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

export const Users = ({  }) => {

    const data = useGetUsers();

    return (
        <header className="App-header">
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




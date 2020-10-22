import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';

import userGet from '../hooks/users/useGet';

export const Users = ({  }) => {
    const users = userGet();
    return (
        <header className="App-header">
        {
            users.map((user) => (
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




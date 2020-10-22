import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';
import { useGetUsers } from './../hooks/users/useGetUsers';

export const Users = ({  }) => {

    const data = useGetUsers();

    return (
        <header className="App-header">
        {
            data.map((user) => (
                <Card name={`${user.first_name} ${user.last_name}`} key={user.id}>
                    <Body texts={[user.email]}></Body>
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




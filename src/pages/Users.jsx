import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';
import axios from 'axios';

const API_USERS = 'https://reqres.in/api/users';

export const Users = ({  }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(API_USERS)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            })
    },[])
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




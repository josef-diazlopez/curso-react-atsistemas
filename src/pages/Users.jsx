import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';
import { themeContext, withTheme } from './../Theme/Theme';

import { useGetUsers } from '../hooks/users/useGetUsers';

export const Users = ({ theme }) => {
    console.log(theme, 'props');
    const data = useGetUsers();

    // const context = useContext(themeContext) --> use cuando está en contexto
    return (
        <header className="App-header" style={{ 'backgroundColor': theme.dark ? 'black' : 'white' }}>
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

export const UsersWithTheme = withTheme(Users);

Users.propTypes = {

}

Users.defaultProps = {

}



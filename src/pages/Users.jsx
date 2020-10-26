import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';
import useGetUsers from '../hooks/users/useGetUsers'
import User, { UserRouter } from './User'
import { Switch, Route } from 'react-router';
import {themeContext, withTheme} from '../Theme/Theme'

export const Users = ({ theme }) => {

    console.log(theme, 'props');
    const data = useGetUsers();

   // const context = useContext(themeContext) --> useo cuando está en contexto
   // console.log(context)
    return (
      <div> 
        <header className="App-header" style={{'background-color': theme.dark ? 'black' : 'white'}}>
          <Switch>
            <Route path="/user2/:id">
              <UserRouter/>
            </Route>
          </Switch>
        {
            data.map((user) => (
                <Card name={`${user.first_name} ${user.last_name}`} key={user.id} idUser={user.id}>
                    <Body texts={[user.email]}></Body>
                </Card>
            ))
        }

      </header>
      </div>    );
};

export const UserWithTeme = withTheme(Users);

Users.propTypes = {

}

Users.defaultProps = {

}




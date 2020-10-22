//react
import React from "react";
//components
import { Card } from "./../components/Card/Card";
import { Body } from "./../components/Card/Body/Body";
//hooks
import { useGetUsers } from "../hooks/users/useGetUsers";
//PropTypes
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

export const Users = () => {
  const users = useGetUsers();

  return (
    <header className="App-header">
      {users.map((user) => (
        <Card name={`${user.first_name} ${user.last_name}`} key={user.id}>
          <Body texts={[user.email]}></Body>
        </Card>
      ))}
    </header>
  );
};

Users.propTypes = {};

Users.defaultProps = {};

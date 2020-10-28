import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "./../components/Card/Card";
import { Body } from "./../components/Card/Body/Body";
import GetUsers from "../hooks/users/useGetUsers";

const API_USERS = "https://reqres.in/api/users";

export const Users = () => {
  const data = GetUsers();

  return (
    <header className="App-header">
      {data.map((user) => (
        <Card id={user.id} name={`${user.first_name} ${user.last_name}`} key={user.id}>
          <Body texts={[user.email]}></Body>
        </Card>
      ))}
    </header>
  );
};

Users.propTypes = {};

Users.defaultProps = {};

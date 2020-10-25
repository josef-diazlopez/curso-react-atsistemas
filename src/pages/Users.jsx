import React from "react";
import PropTypes from "prop-types";
import { Card } from "./../components/Card/Card";
import { Body } from "./../components/Card/Body/Body";
import { useGetUsers } from "../hooks/users/useGetUsers";
import { Route, Link } from "react-router-dom";
import { UserRoute } from "./User";

export const Users = () => {
  const data = useGetUsers();

  return (
    <header className="App-header">
      <Route path="/user2/:id">
        <UserRoute></UserRoute>
      </Route>

      <Link to="/user/alta">Alta</Link>

      {data.map((user) => (
        <Card
          name={`${user.first_name} ${user.last_name}`}
          id={user.id}
          key={user.id}
        >
          <Body texts={[user.email]}></Body>
        </Card>
      ))}
    </header>
  );
};

Users.propTypes = {};

Users.defaultProps = {};

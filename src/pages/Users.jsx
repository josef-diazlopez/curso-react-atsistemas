import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "./../components/Card/Card";
import { Body } from "./../components/Card/Body/Body";
import { useGetUsers } from "../hooks/users/useGetUsers";
import { Route, Link } from "react-router-dom";
import { UserRoute } from "./User";
import { themeContext, withTheme } from "../Theme/Theme";
import { connect } from "react-redux";

export const Users = ({ theme, ...props }) => {
  console.log(props);

  const data = useGetUsers();

  // const context = useContext(themeContext);
  // const darkTheme = context?.dark;

  const darkTheme = theme?.dark;

  return (
    <header
      className={`App-header ${darkTheme ? "dark-theme" : "light-theme"}`}
    >
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

const mapStateToProps = (state /*, ownProps*/) => {
  return { counter: state };
};

export const userConnectted = connect(mapStateToProps)(Users);

export const UsersThemable = withTheme(userConnectted);

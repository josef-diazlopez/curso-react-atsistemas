import React from "react";
import PropTypes from "prop-types";
import { Card } from "./../components/Card/Card";
import { Body } from "./../components/Card/Body/Body";
import GetUsers from "../hooks/users/useGetUsers";
import { withTheme } from "../Theme/Theme";
import { connect } from "react-redux";
import { DECREMENT, INCREMENT } from "../actions/counter/counter";
import {bindActionCreators} from 'redux';
import {increment, decrement} from '../actions/counter/counter';

const API_USERS = "https://reqres.in/api/users";

export const Users = ({ theme, ...props }) => {
  const data = GetUsers();
  const increment = () => {
    props.increment();
  };
  const decrement = () => {
    props.decrement();
  };
  return (
    <header className={theme.dark ? "App-header-dark" : "App-header"}>
      <button onClick={increment}>Aumentar longitud</button>
      <button onClick={decrement}>Disminuir longitud</button>
      {data.slice(0, props.counter.count).map((user) => (
        <Card
          id={user.id}
          name={`${user.first_name} ${user.last_name}`}
          key={user.id}
        >
          <Body texts={[user.email]}></Body>
        </Card>
      ))}
    </header>
  );
};

Users.propTypes = {
  theme: PropTypes.shape({
    dark: PropTypes.bool.isRequired,
  }),
};

Users.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      increment,
      decrement
    },
    dispatch
  );
};
export const UsersWithTheme = connect(mapStateToProps, mapDispatchToProps)(withTheme(Users));


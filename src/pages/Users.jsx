import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';
import { themeContext, withTheme } from './../Theme/Theme';

import { useGetUsers } from '../hooks/users/useGetUsers';

// redux 
import { connect } from "react-redux";
import {
    DECREMENT,
    INCREMENT,
    increment,
    decrement,
} from "../actions/counter/counter";
import { bindActionCreators } from "redux";


export const Users = ({ theme, ...props }) => {
    //console.log(theme);
    console.log(props);
    const data = useGetUsers();

    const num = 2;

    const sum = () => {
        // props.dispatch({ type: INCREMENT, payload: num });
        props.increment(num);
    };

    const rest = () => {
        // props.dispatch({ type: DECREMENT, payload: num });
        props.decrement(num);
    };

    // const context = useContext(themeContext) --> use cuando está en contexto
    return (
        <header className="App-header" style={{ 'backgroundColor': theme.dark ? 'black' : 'white', 'color': theme.dark ? 'white' : 'black' }}>
            <div>
                <button onClick={rest}>-{num}</button>
                <span> {props?.counter?.count} </span>
                <button onClick={sum}>+{num}</button>
            </div>

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

Users.propTypes = {
}
Users.defaultProps = {
}


const mapStateToProps = (state /*, ownProps*/) => {
    return { counter: state.counter };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(
        {
            increment,
            decrement,
        },
        dispatch
    );
};

export const userConnectted = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export const UsersWithTheme = withTheme(userConnectted);
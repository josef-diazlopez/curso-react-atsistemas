import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './../components/Card/Card';
import { Body } from './../components/Card/Body/Body';
import userGet from '../hooks/users/useGet';
import { withThemeRef } from '../Themee/Theme'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {increment } from '../actions/counter/counter'

export const Users = ({ theme, ...props}) => {
    console.log(props);
    const users = userGet();
    //const theme = useContext(themeContext);
    const increment = ()=> {
        //props.dispatch({type: '@COUNTER/INCREMENT',payload : 2})
        props.increment(2)
    }

    return (
        <header className="App-header" style={{backgroundColor: theme.dark ? 'black' : 'white'}} >
            <button onClick={increment}>{props.counter.count}</button>
        {
            users.map((user) => (
                <Card name={`${user.first_name} ${user.last_name}`} id={user.id} key={user.id}>
                    <Body id={user.id} texts={[user.email]}></Body>
                </Card>
            ))
        }
      </header>
    );
};

//se usa el selector se vera mañana
const mapStateToProps = (state) =>{
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
   return bindActionCreators(
        {
            increment,
        },
        dispatch
    )
}

export const UsersWithTheme = withThemeRef(Users);
export const  UsersRedux = connect(mapStateToProps ,mapDispatchToProps)(UsersWithTheme);

Users.propTypes = {

}

Users.defaultProps = {

}





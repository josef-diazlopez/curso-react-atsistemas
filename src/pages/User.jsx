import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from "react-router";
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { themeContext, ThemeProvider, ThemeConsumer } from '../Themee/Theme'
import {increment } from '../actions/counter/counter'

const API_USER = 'https://reqres.in/api/users/';

class User extends Component {
constructor(props){
    super(props);
    this.state = {
        dato: 2,
        user: {
            first_name: "",
            last_name: "",
            id: "",
            avatar:"",
            company:"",
            text:"",
            url:"",
           
        },
    }
}
render(){
   console.log(this.props);
    return (
    <div className={this.context.dark ? "dark-color" : null}>
    <div onClick={()=>this.setState((state,props)=>({dato: this.state.user.id+1}))} >{this.state.user.id}</div>
    <div>{this.state.user.email}</div>
    </div>
    )
}

componentDidUpdate(previusProps, previusState){
    if(previusState.dato !== this.state.dato){
    this.getUser();
}
}

getUser =() =>{
    axios.get(`${API_USER}${this.state.dato}`)
    .then((response) => {
        this.setState({user:response?.data?.data});
        console.log(this.state.user)
    })
    .catch((error) => {
        console.error(error);
    })
}

componentDidMount(){
    this.setState({dato:this.props.match.params.id})
   this.getUser();
}

}

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

export const UserRoute = withRouter(User);
export const  UserRedux = connect(mapStateToProps ,mapDispatchToProps)(UserRoute);

User.propTypes = {

}

User.defaultProps = {

}

User.contextType = themeContext;


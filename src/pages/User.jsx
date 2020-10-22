import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import axios from 'axios';
export class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{
                id: 2,
                email:'',
                first_name: '',
                last_name: '',
                avatar: ''
            },
        }
    }
    render(){
        return (
            <>
            <button onClick={ ()=>this.setState({ user:{id: this.state.user.id + 1} }) }>ID : { this.state.user.id } | siguiente usuario </button>
            <br></br>
            <img src={ this.state.user.avatar }></img>
            <br></br>
            <div>Email : { this.state.user.email }</div>
            <div>FirstName :{ this.state.user.first_name }</div>
            <div>LastName : { this.state.user.last_name }</div>
            </>
        );
    }

    fetchUsers(id_user=2){
        axios.get(`https://reqres.in/api/users/`+id_user)
        .then((response) => {
            this.setState({user:{
                id:response.data.data.id,
                email: response.data.data.email,
                first_name: response.data.data.first_name,
                last_name: response.data.data.last_name,
                avatar: response.data.data.avatar
            }})
        })
        .catch((error) => {
            console.error(error);
        })
    }

    componentDidUpdate(previusProps,previusState){
        if(previusState.user.id!==this.state.user.id){
            this.fetchUsers(this.state.user.id);
        }

    }

    componentDidMount(){
        this.fetchUsers();
       
    }
    
}
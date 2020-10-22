import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const API_USER = 'https://reqres.in/api/users/2';

export class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
        // this.listUser = React.createRef();
    }
    
    componentDidMount(){
        this.getUsers();
    }

    componentWillUpdate(){
        
    }

    componentDidUpdate(prevousProps, previousState){
        if(previousState.user.id !== this.state.user.id) this.getUsers();
    }

    render(){
        return (
            <>
             <div onClick={() => this.setState((state, pros) => ({id: state.id + 1}))}>Siguiente</div>
             <div ref={this.listUser} onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>{this.state.id}</div>
              <img  src={this.state.avatar}/>
              <div>{this.state.email}</div>
              <div>{this.state.name}</div>

              <div>{this.state.company}</div>
              <div>{this.state.url}</div>
              <div>{this.state.text}</div>
            </>
          )
    }

    getUsers = () => {
        axios.get(API_USER)
        .then((response) => {
          this.setState(
            {
              id: response.data.data.id,
              email: response.data.data.email, 
              name: `${response.data.data.first_name} ${response.data.data.last_name}`,
              avatar: response.data.data.avatar,
              company: response.data.ad.company,
              url: response.data.ad.url,
              url: response.data.ad.text
            }
          );
        })
        .catch((error) => {
            console.error(error);
        });
      }

}
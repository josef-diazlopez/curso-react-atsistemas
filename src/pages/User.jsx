import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class User extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: '1',
      email: '',
      name: '',
      avatar: '',
      company: '',
      url: '',
      text: '' 
    };
  }

  render() {
    return (
      <>
        <div onClick={() => this.setState((state, pros) => ({id: state.id + 1}))}>{this.state.id}</div>
        <div>{this.state.email}</div>
        <div>{this.state.name}</div>
        <img src={this.state.avatar}/>
        <div>{this.state.company}</div>
        <div>{this.state.url}</div>
        <div>{this.state.text}</div>
      </>
    )
  };

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    axios.get(`https://reqres.in/api/users/${this.state.id}`)
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

  componentDidUpdate(prevProps, prevState){
    if (prevState.id !== this.state.id) {
      this.getUsers();
    }
  }
}
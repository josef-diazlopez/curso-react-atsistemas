import React, { Component, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

const API_USER = 'https://reqres.in/api/users/';

//Componente de clase básico
export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        }
        this.listUser = React.createRef();
    }

    render() {

        return (
            <>
                <div ref={this.listUser} onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>{this.state.id}</div>
                <div>{this.state.email}</div>
                <div>{this.state.name}</div>
                <img src={this.state.avatar}></img>
                <div>{this.state.company}</div>
                <div>{this.state.url}</div>
            </>
        );

    }

    componentDidMount() {
        this.getUser();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            this.getUser();
        }
    }

    getUser = () => {
        axios.get(API_USER + this.state.counter)
            .then((response) => {
                console.log(response)
                this.setState(
                    {
                        id: response.data.data.id,
                        email: response.data.data.email,
                        name: `${response.data.data.first_name} ${response.data.data.last_name}`,
                        avatar: response.data.data.avatar,
                        company: response.data.ad.company,
                        url: response.data.ad.url
                    }
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }


}
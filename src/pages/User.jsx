
import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import { withRouter } from "react-router";

const API_USER = 'https://reqres.in/api/users/';

export class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id || 0,
        }
    }


    componentDidMount() {
        this.getUser(this.props.match.params.id);

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getUser(this.state.id);
        }
    }

    getUser = (id) => {
        axios.get(API_USER + id)
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

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        console.log(this.props)
        return (
            <>
                <div onClick={() => { this.setState({ id: this.state.id + 1 }) }}>{this.state.id}</div>
                <div>{this.state.email}</div>
                <div>{this.state.name}</div>
                <img src={this.state.avatar}></img>
                <div>{this.state.company}</div>
                <div>{this.state.url}</div>
                <div onClick={this.goBack}><b>Ir atrás</b></div>
            </>
        );

    }
}

export const UserRoute = withRouter(User);
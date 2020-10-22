import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const API_USER = 'https://reqres.in/api/users/';

export class User extends Component {

    constructor(props) {
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
        // this.forceUpdate(); forzar que se actualize
        return (
            // <div onClick={() => { this.setState({ dato: 3 }) }}>user</div>
            <>
                <div>Id: {this.state.id}</div>
                <div>Email: {this.state.email}</div>
                <div>Name: {this.state.name}</div>
                <div>
                    <img src={this.state.avatar} />
                </div>
                <div >
                    <button onClick={() => this.setState((state, pros) => ({id: state.id+1}))}>
                        Next
                    </button>
                </div>
                <div>Company: {this.state.company}</div>
                <div>Company-Url: {this.state.url}</div>
                <div>Company-Text: {this.state.text}</div>
            </>
        )
    };

    componentDidMount() {
        this.getUsers();
    }

    /**
     * get users from api
     */
    getUsers = () => {
        axios.get(`${API_USER}${this.state.id}`)
            .then((response) => {
                this.setState(
                    {
                        id: response.data.data.id,
                        email: response.data.data.email,
                        name: `${response.data.data.first_name}
                               ${response.data.data.last_name}`,
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

    /**
     * Update only if change the state
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getUsers();
        }
    }
}
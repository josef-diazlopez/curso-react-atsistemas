import React from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import axios from "axios";

const API_USERS = "https://reqres.in/api/users/";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.listUser = React.createRef()
  }
  render() {
    return (
      <div ref={this.listUser}>
        <button
          onClick={() => this.getUser(`${API_USERS}${this.state?.data?.id + 1}`)}
        >
          {this.state?.data?.id}
        </button>
        <p>First Name: {this.state?.data?.first_name}</p>
        <p>Surname: {this.state?.data?.surname}</p>
        <p>Email: {this.state?.data?.email}</p>
        <img
          alt={`img ${this.state?.data?.first_name}`}
          src={this.state?.data?.avatar}
        ></img>
      </div>
    );
  }

  getUser(API_ID_USER = `${API_USERS}1`) {
    axios
      .get(API_ID_USER)
      .then((response) => {
        response?.data?.data?.email &&
          this.setState({
            data: response.data.data,
            ad: response.data.ad,
          });
      })
      .catch((error) => {
        //TODO:
        console.error(error);
      });
  }

  componentDidMount() {
    this.getUser();
    console.log(this.listUser.current)
  }
}

import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const API_USERS = "https://reqres.in/api/users/";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <button onClick={() => this.getUser()}>{this.state?.data?.id}</button>
        <p>Email {this.state?.data?.email}</p>
        <p>First Name {this.state?.data?.first_name}</p>
      </>
    );
  }

  getUser() {
    let API_ID_USER = "";
    if (this.state?.data?.id) {
      API_ID_USER = `${API_USERS}${this.state.data.id + 1}`;
    } else {
      API_ID_USER = `${API_USERS}1`;
    }
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
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withRouter } from "react-router";
import { ThemeContext } from "../Theme/Theme";
import { connect } from "react-redux";

const API_USER_URL = "https://reqres.in/api/users/";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "",
        email: "",
        id: 0,
        avatar: "",
        ad: { company: "", url: "", text: "" },
      },
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`${API_USER_URL}${id}`).then((resp) => {
      const userData = getUserByData(resp.data);
      this.setState({
        userData: userData,
      });
    });
  }
  render() {
    let context = this.context;
    console.log(this.props);
    return (
      <div style={{ backgroundColor: context.dark ? "grey" : "white" }}>
        <div
          onClick={() => this.setState({ selectedId: ++this.state.selectedId })}
        >
          Id: {this.state.userData.id}
        </div>
        <div>Email: {this.state.userData.email}</div>
        <div>Name: {this.state.userData.name}</div>
        <img src={this.state.userData.avatar}></img>
        <div>Company: {this.state.userData.ad.company}</div>
        <div>Company Url: {this.state.userData.ad.url}</div>
        <div>Company Text: {this.state.userData.ad.text}</div>
      </div>
    );
  }
}

const getUserByData = (userData) => {
  return {
    name: `${userData.data.first_name} ${userData.data.last_name}`,
    email: userData.data.email,
    id: userData.data.id,
    avatar: userData.data.avatar,
    ad: {
      company: userData.ad.company,
      url: userData.ad.url,
      text: userData.ad.text,
    },
  };
};

export default User;
export const UserRoute = connect()(withRouter(User));
User.contextType = ThemeContext;


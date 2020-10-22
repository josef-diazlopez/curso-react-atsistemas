import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withRouter } from "react-router-dom";

const API_USERS = "https://reqres.in/api/users/";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   currentId: 1,
    };
  }

  render() {
    const data = this.state.data?.data;
    const ad = this.state.data?.ad;

    return (
      <>
        <div>
          <img src={data?.avatar}></img>
          <p>{data?.id}</p>
          <p>{data?.email}</p>
          <p>{`${data?.first_name} ${data?.last_name}`}</p>
        </div>

        <div>
          <p>
            <a href={ad?.url}>{ad?.company}</a>
          </p>
          <p>{ad?.text}</p>
        </div>

        <div>
          <button
            onClick={() => {
              this.setState({ data: { id: data.id + 1 } });
            }}

            // onClick={() => {
            //   const currentId = this.state.currentId + 1;
            //   this.setState({ currentId });
            //   this.loadUser(currentId);
            // }}
          >
            Siguiente usuario
          </button>
        </div>
      </>
    );
  }

  componentDidMount() {
    // this.loadUser(this.state.currentId);
    this.loadUser(this.props.match?.params?.id || 1);
  }

  loadUser(id) {
    axios
      .get(API_USERS + id)
      .then((response) => {
        this.setState({
          data: response?.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      this.state.data?.id &&
      previousState?.data?.id !== this.state.data?.id
    ) {
      this.loadUser(this.state.data.id);
    }
  }
}

export const UserRoute = withRouter(User);

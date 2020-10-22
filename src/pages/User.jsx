import React from "react";
import axios from "axios";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      selectedId: 1
    };
    this.listUser = React.createRef()
  }
  render() {
    return (
      <div ref={this.listUser}>
        <button
          onClick={() => this.setState((state,props) => ({selectedId: state.selectedId + 1}))}
        >
          {this.state?.user?.id}
        </button>
        <p>Nombre: {this.state?.user?.first_name}</p>
        <p>Apellido: {this.state?.user?.surname}</p>
        <p>Email: {this.state?.user?.email}</p>
        <img
          alt={`img ${this.state?.user?.first_name}`}
          src={this.state?.user?.avatar}
        ></img>
      </div>
    );
  }

  getUser() {
    axios
      .get(`https://reqres.in/api/users/${this.state.selectedId}`)
      .then((response) => {
        const responseData = response?.data;
        console.log(responseData);
        this.setState({
          user : {...responseData.data, ...response.data.ad}
        })
  })
}

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedId !== this.state.selectedId) {
      this.getUser();
    }
  }
}

export default User;
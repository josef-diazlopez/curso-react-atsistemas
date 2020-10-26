import React from "react";
import axios from "axios";
import { withRouter } from "react-router"; 
import { themeContext } from '../Theme/Theme'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      selectedId: undefined
    };
    this.listUser = React.createRef()
  }
  render() {
    return (
      <div ref={this.listUser} style={{'background-color': this.context.dark ? 'black' : 'white'}}>
        <button
       //   onClick={() => this.setState((state,props) => ({selectedId: state.selectedId + 1}))}
        >
          {this.state?.user?.id}
        </button>
        <p>Nombre: {this.state?.user?.first_name}</p>
        <p>Apellido: {this.state?.user?.last_name}</p>
        <p onClick={() => {
          if(window.confirm('¿Quiere navegar al detalle del usuario?')){
            this.props.history.push(`/`)}
        }}
        >Email: {this.state?.user?.email}</p>
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
    this.setState((state, props) => ({
      selectedId: this.props.match?.params?.id || 1
    }))
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedId !== this.state.selectedId) {
      this.getUser();
    }
  }
}

User.contextType = themeContext;
export const UserRouter = withRouter(User)
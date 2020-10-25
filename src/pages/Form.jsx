import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Input } from "../components/Form/Input";

const API_USERS = "https://reqres.in/api/users/";

export class Form extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        first_name: null,
        last_name: null,
        email: null,
        avatar: null,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [event.target.id]: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.state.formData;
    console.log(formData);
    if (this.state.id) {
      this.updateUser(formData);
    } else {
      this.createUser(formData);
    }
  }

  render() {
    const inputsList = [
      {
        label: "Nombre",
        id: "first_name",
        onChange: this.handleChange,
        type: "text",
        value: this.state?.formData?.first_name,
      },
      {
        label: "Apellido",
        id: "last_name",
        onChange: this.handleChange,
        type: "text",
        value: this.state?.formData?.last_name,
      },
      {
        label: "Email",
        id: "email",
        onChange: this.handleChange,
        type: "email",
        value: this.state?.formData?.email,
      },
      {
        label: "Avatar",
        id: "avatar",
        onChange: this.handleChange,
        type: "url",
        value: this.state?.formData?.avatar,
      },
    ];

    const { history } = this.props;

    return (
      <div>
        {this.state.id ? <p>ID {this.state.id}</p> : null}

        <form onSubmit={this.handleSubmit}>
          {inputsList.map((input) => (
            <Input
              key={input.id}
              label={input.label}
              id={input.id}
              name={input.id}
              onChange={input.onChange}
              type={input.type}
              value={input.value}
            ></Input>
          ))}

          <div>
            <button
              onClick={(event) => {
                event.preventDefault();
                history.goBack();
              }}
            >
              Volver
            </button>
            {this.state?.id ? (
              <button
                onClick={(event) => {
                  event.preventDefault();
                  this.deleteUser();
                }}
              >
                Borrar
              </button>
            ) : null}
            <input
              type="submit"
              value={this.state.id ? "Actualizar" : "Crear"}
            />
          </div>
        </form>
        {this.state?.formData?.avatar ? (
          <img src={this.state?.formData?.avatar} alt="Avatar" />
        ) : null}
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match?.params?.id;
    if (id) {
      this.loadUser(id);
    }
  }

  loadUser(id) {
    axios
      .get(API_USERS + id)
      .then((response) => {
        this.setState({
          id,
          data: response?.data?.data,
          formData: { ...response?.data?.data },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  createUser(data) {
    axios
      .post(API_USERS, data)
      .then((response) => {
        if (response.status === 201) {
          alert("Usuario creado con éxito");
          this.setState({
            ...this.state,
            id: response.data.id,
            data: response.data,
          });
        } else {
          alert("Error creando el usuario");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateUser(data) {
    axios
      .put(API_USERS + this.state.id, data)
      .then((response) => {
        if (response.status === 200) {
          alert("Usuario actualizado con éxito");
          this.setState({
            ...this.state,
            data: response.data,
          });
        } else {
          alert("Error actualizando el usuario");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteUser() {
    if (
      window.confirm(
        `¿Está seguro que desea eliminar el usuario ${this.state.data.first_name} ${this.state.data.last_name}?`
      )
    ) {
      axios
        .delete(API_USERS + this.state.id)
        .then((response) => {
          if (response.status === 204) {
            alert("Usuario eliminado con éxito");

            const { history } = this.props;
            history.push("/");
          } else {
            alert("Error eliminando el usuario");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}

export const FormRoute = withRouter(Form);

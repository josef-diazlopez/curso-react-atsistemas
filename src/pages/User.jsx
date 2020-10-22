import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const API_USER = 'https://reqres.in/api/users/';

class User extends Component {
constructor(props){
    super(props);
    this.state = {
        dato: 2,
        user: {
            first_name: "",
            last_name: "",
            id: "",
            avatar:"",
            company:"",
            text:"",
            url:"",
           
        },
    }
}
render(){
    return (
    <>
    <div onClick={()=>this.setState((state,props)=>({dato: this.state.user.id+1}))} >{this.state.user.id}</div>
    <div>{this.state.user.email}</div>
    </>
    )
}

componentDidUpdate(previusProps, previusState){
    if(previusState.dato !== this.state.dato){
    this.getUser();
}
}

getUser =() =>{
    axios.get(`${API_USER}${this.state.dato}`)
    .then((response) => {
        this.setState({user:response?.data?.data});
        console.log(this.state.user)
    })
    .catch((error) => {
        console.error(error);
    })
}

componentDidMount(){
   this.getUser();
}

}

export default User;
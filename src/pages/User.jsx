import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from "react-router";

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
    console.log(this.props);
    console.log(this.props.match.params.id);
   
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
    this.setState({dato:this.props.match.params.id})
   this.getUser();
}

}

User.propTypes = {

}

User.defaultProps = {

}


const UserRouter = withRouter(User);
export default UserRouter;
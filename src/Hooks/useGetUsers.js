import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API_USERS = 'https://reqres.in/api/users';

export const useGetUsers = () => {
 
    const [users, setUsers] = useState([]);
    
    useEffect(()=> {
      axios.get(API_USERS)
      .then(response => {
          console.log(response);
          setUsers(response.data.data);
      })
      .catch(error=>{
          console.log(error)
      })
    }, []);
    return users || [];
}
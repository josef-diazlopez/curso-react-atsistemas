import axios from 'axios';
import { useEffect, useState } from 'react';

const API_USERS = 'https://reqres.in/api/users';


const useGetUsers = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(API_USERS)
    .then((response) => {
      setUsers(response.data?.data)
    })
  }, [])

  return users;
}

export default useGetUsers
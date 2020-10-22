import { useEffect, useState } from "react";
import axios from "axios";

const API_USERS = "https://reqres.in/api/users";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(API_USERS)
      .then((response) => {
        response?.data?.data && setUsers(response.data.data);
      })
      .catch((error) => {
        //TODO:
        console.error(error);
      });
  }, []);
  return users;
};

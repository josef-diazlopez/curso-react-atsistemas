import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_USERS = 'https://reqres.in/api/users';

const useGet = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(API_USERS)
            .then((response) => {
                setData(response?.data?.data);
            })
            .catch((error) => {
                console.error(error);
            })
    },[])
    return data || [];
}

export default useGet;
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_USERS = 'https://reqres.in/api/users'

const useCallUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get(API_USERS)
            .then((response) => {
                setUsers(response.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return users
}

export default useCallUsers

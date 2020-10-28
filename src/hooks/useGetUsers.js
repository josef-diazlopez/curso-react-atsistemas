import { useState, useEffect, useCallback } from 'react'
import { getUsers } from '../services/User/userServices'
import { setCount } from '../actions/counter/counter'

const useGetUsers = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getUsers().then((resp) => {
            setData(resp)
        })
    }, [])

    return (
        {
            data,
            setData,
            createUser: useCallback((u) => {
                setData((d) => [...d, u])
            }, []),
            updateUser: useCallback((u) => {
                setData((d) => d.map((d) => (d.id === u.id ? u : d)))
            }, []),
            deleteUser: useCallback((id) => {
                setData((d) => d.filter((d) => d.id !== id))
            }, []),
        } || []
    )
}

export default useGetUsers

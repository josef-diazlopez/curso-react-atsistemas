import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card/Card'
import Body from '../components/Body/Body'

const API_USERS = 'https://reqres.in/api/users'

export const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get(API_USERS)
            .then((response) => {
                console.log('response', response)
                setUsers(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <header className="App-header">
                <Card name="RSostenido: El Podcast">
                    <Body />
                </Card>
            </header>
            {users.map((user) => {
                return (
                    <header key={user.id} className="App-header">
                        <Card name={`${user.first_name} ${user.last_name}`}>
                            <Body content={user} />
                        </Card>
                    </header>
                )
            })}
        </>
    )
}

Users.propTypes = {}

Users.defaultProps = {}

import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './../components/Card/Card'
import { Body } from './../components/Card/Body/Body'
import useCallUsers from '../components/hooks/useCallUsers'

export const Users = () => {
    const users = useCallUsers()

    return (
        <header className="App-header">
            {users.map((user) => (
                <Card
                    name={`${user.first_name} ${user.last_name}`}
                    key={user.id}
                >
                    <Body texts={[user.email]}></Body>
                </Card>
            ))}
        </header>
    )
}

import React from 'react'
import { Card } from './../components/Card/Card'
import Body from './../components/Card/Body/Body'
import useGetUsers from '../components/hooks/useGetUsers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserRoute } from './User'

export const Users = (props) => {
    const users = useGetUsers()
    return (
        <header className="App-header">
            <Switch>
                <Route path="/user2/:id">
                    <UserRoute />
                </Route>
            </Switch>
            {users.map((user) => (
                <Card
                    name={`${user.first_name} ${user.last_name}`}
                    key={user.id}
                    id={user.id}
                >
                    <Body id={user.id} texts={[user.email]}></Body>
                </Card>
            ))}
        </header>
    )
}

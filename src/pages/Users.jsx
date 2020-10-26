import React, { useEffect, useState } from 'react'
import { Card } from './../components/Card/Card'
import Body from './../components/Card/Body/Body'
import useGetUsers from '../hooks/useGetUsers'
import { Button } from '../components/Buttons/Button/Button'
import { IoMdAddCircle } from 'react-icons/io'
import {
    createUser,
    updateUser,
    deleteUser,
} from '../services/User/userServices'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserRoute } from './User'

export const Users = (props) => {
    const users = useGetUsers()
    const handleUsers = (action, id) => {
        switch (action) {
            case 'create':
                createUser().then((resp) => {
                    console.log('respCreate', resp)
                    users.createUser({
                        id: resp.id,
                        email: 'rgm93@icloud.com',
                        first_name: 'Ruben',
                        last_name: 'Gonzalez',
                        avatar:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
                    })
                })

                break
            case 'update':
                updateUser(props.id).then((resp) => {
                    console.log('respUpdate', resp)
                    users.updateUser({
                        id: 1,
                        email: 'RSostenidoOficial@gmail.com',
                        first_name: 'RSostenido',
                        last_name: 'El Podcast',
                        avatar:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
                    })
                })

                break
            case 'delete':
                deleteUser(props.id).then((resp) => {
                    console.log('respDelete', resp)
                    users.deleteUser(id)
                })

            default:
                break
        }
    }
    return (
        <header className="App-header">
            {/*<Switch>
                <Route path="/user2/:id">
                    <UserRoute />
                </Route>
            </Switch>*/}
            <Button action="create" createUser={(e) => handleUsers(e)}>
                <IoMdAddCircle />
            </Button>
            {users &&
                users.data &&
                users.data.map((user) => (
                    <Card
                        name={`${user.first_name} ${user.last_name}`}
                        key={user.id}
                        id={user.id}
                        updateUserList={handleUsers}
                    >
                        <Body id={user.id} texts={[user.email]}></Body>
                    </Card>
                ))}
        </header>
    )
}

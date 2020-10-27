import React from 'react'
import { Card } from './../../components/Card/Card'
import Body from './../../components/Card/Body/Body'
import { Button } from '../../components/Buttons/Button/Button'
import { IoMdAddCircle } from 'react-icons/io'

export const UserPresenter = (props) => {
    const { counter, handleUsers, theme, users } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <h1>Num of Users: {counter.counter.count}</h1>
            <Button
                name="Create user"
                action="create"
                createUser={(e) => handleUsers({ ...props, e })}
            >
                <IoMdAddCircle />
            </Button>
            {users &&
                users.data &&
                users.data.map((user) => (
                    <Card
                        name={`${user.first_name} ${user.last_name}`}
                        key={user.id}
                        id={user.id}
                        handleUsers={(e) => handleUsers({ ...props, e })}
                    >
                        <Body id={user.id} texts={[user.email]}></Body>
                    </Card>
                ))}
        </header>
    )
}

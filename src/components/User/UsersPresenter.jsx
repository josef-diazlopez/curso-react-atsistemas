import React from 'react'
import { Card } from '../Card/Card'
import Body from '../Card/Body/Body'
import { Button } from '../Buttons/Button/Button'
import { IoMdAddCircle } from 'react-icons/io'
import { Title } from '../Title/Title'

export const CardUser = (props) => {
    const { handleUsers, users } = props
    return (
        <>
            {users &&
                users.data &&
                users.data.map((user) => (
                    <Card
                        name={`${user.first_name} ${user.last_name}`}
                        key={user.id}
                        id={user.id}
                        handleUsers={(e) => handleUsers({ ...props, e })}
                        isList={true}
                    >
                        <Body id={user.id} texts={[user.email]}></Body>
                    </Card>
                ))}
            {users && users.data.length === 0 && <h1>No hay usuarios</h1>}
        </>
    )
}

export const UsersPresenter = (props) => {
    const { counter, handleUsers, theme, users } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <Title title={`Num of Users: ${counter.counter.count}`}></Title>
            <Button
                name="Create user"
                action="create"
                createUser={(e) => handleUsers({ ...props, e, users })}
            >
                <IoMdAddCircle />
            </Button>
            <CardUser {...props} />
        </header>
    )
}

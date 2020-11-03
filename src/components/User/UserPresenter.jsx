import React from 'react'
import { Card } from '../Card/Card'
import Body from '../Card/Body/Body'
import { Title } from '../Title/Title'
import Loader from 'react-loader-spinner'

export const CardUser = (props) => {
    const { user, ad } = props
    return (
        <>
            {user !== null && ad !== null && (
                <Card
                    name={`${user.first_name} ${user.last_name}`}
                    key={user.id}
                >
                    <img src={user.avatar} width={150} height={150} alt="img" />
                    <h4>{`${ad.company}`}</h4>
                    <h5>{`${ad.text}`}</h5>
                    <h6>{`${ad.url}`}</h6>
                    <Body texts={[user.email]}></Body>
                </Card>
            )}
        </>
    )
}

export const UserPresenter = (props) => {
    const { counter, theme } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <Title title={`Num of Users: ${counter.counter.count}`}></Title>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={1000}
            />
            <CardUser {...props} />
        </header>
    )
}

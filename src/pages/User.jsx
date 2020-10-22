import React from 'react'
import axios from 'axios'
import { Card } from './../components/Card/Card'
import { Body } from './../components/Card/Body/Body'

export class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
        }
    }
    componentDidMount() {
        axios
            .get('https://reqres.in/api/users/2')
            .then((response) => {
                this.setState({ user: response.data.data })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {
        console.log('this.state', this.state)
        const { user } = this.state
        return (
            <header className="App-header">
                <Card
                    name={`${user.first_name} ${user.last_name}`}
                    key={user.id}
                >
                    <Body texts={[user.email]}></Body>
                </Card>
            </header>
        )
    }
}

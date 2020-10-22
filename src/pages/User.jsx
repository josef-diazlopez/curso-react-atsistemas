import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Card } from './../components/Card/Card'
import Body from './../components/Card/Body/Body'
import { withRouter } from 'react-router'

export class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            ad: {},
            id: props.match.params.id || 0,
        }
        this.listUser = React.createRef()
    }

    componentDidMount() {
        this.getUser()
        // this.listUser.current
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getUser()
        }
    }
    getUser = () => {
        axios
            .get('https://reqres.in/api/users/' + this.state.id)
            .then((response) => {
                this.setState({
                    user: response.data.data,
                    ad: response.data.ad,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {
        console.log('this.state', this.state)
        console.log('this.props', this.props)
        const { user, ad } = this.state
        return (
            <header className="App-header">
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
            </header>
        )
    }
}

export const UserRoute = withRouter(User)

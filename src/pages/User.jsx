import React from 'react'
import PropTypes from 'prop-types'
import { Card } from './../components/Card/Card'
import Body from './../components/Card/Body/Body'
import { withRouter } from 'react-router'
import { getUser } from '../services/User/userServices'
import Loader from 'react-loader-spinner'

import { connect } from 'react-redux'
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
        getUser(this.state.id).then((resp) => {
            this.setState({
                user: resp.user,
                ad: resp.ad,
            })
        })
    }
    render() {
        const { user, ad } = this.state
        const { counter } = this.props
        console.log('proprop', this.props)
        return (
            <header className="App-header">
                <h1>{counter.counter.count}</h1>
                {!!user && !!ad && (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={1000}
                    />
                )}
                {user !== null && ad !== null && (
                    <Card
                        name={`${user.first_name} ${user.last_name}`}
                        key={user.id}
                    >
                        <img
                            src={user.avatar}
                            width={150}
                            height={150}
                            alt="img"
                        />
                        <h4>{`${ad.company}`}</h4>
                        <h5>{`${ad.text}`}</h5>
                        <h6>{`${ad.url}`}</h6>
                        <Body texts={[user.email]}></Body>
                    </Card>
                )}
            </header>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state,
    }
}

export const UseConnected = connect(mapStateToProps)(User)
export const UserRoute = withRouter(UseConnected)

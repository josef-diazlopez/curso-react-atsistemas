import React from 'react'
import { Card } from './../components/Card/Card'
import Body from './../components/Card/Body/Body'
import { withRouter } from 'react-router'
import { getUser } from '../services/User/userServices'
import { withTheme } from '../theme/theme'

import { connect } from 'react-redux'
import { UserPresenter } from '../components/User/UserPresenter'
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
        return (
            <>
                {!!user && !!ad && (
                    <UserPresenter
                        {...this.props}
                        user={this.state.user}
                        ad={this.state.ad}
                    />
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

export const UseConnected = connect(mapStateToProps)(withTheme(User))
export const UserRoute = withRouter(UseConnected)

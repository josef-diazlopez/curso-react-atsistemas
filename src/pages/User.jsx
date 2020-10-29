import React from 'react'
import { withRouter } from 'react-router'
import { getUser as retrievingUsers } from '../services/User/userServices'
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
        retrievingUsers(this.state.id).then((resp) => {
            this.setState({
                user: resp.user,
                ad: resp.ad,
            })
        })
    }
    render() {
        const { user, ad } = this.state
        return <UserPresenter {...this.props} user={user} ad={ad} />
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

export const UseConnected = connect(mapStateToProps)(withTheme(User))
export const UserRoute = withRouter(UseConnected)

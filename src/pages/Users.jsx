import React, { useEffect } from 'react'
import useGetUsers from '../hooks/useGetUsers'
import { withTheme } from '../theme/theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment, setCount } from '../actions/counter/counter'
import { UsersPresenter } from '../components/User/UsersPresenter'
import { handleUsers } from '../functions/User/user'

export const Users = (props) => {
    const users = useGetUsers()
    let numUsers = users.data.length
    const { setCount } = props
    useEffect(() => {
        setCount(numUsers)
    }, [numUsers]) // eslint-disable-line react-hooks/exhaustive-deps

    // console.log('users', users)
    return (
        <UsersPresenter
            {...props}
            users={users}
            handleUsers={(e) => handleUsers({ ...props, e })}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            increment,
            decrement,
            setCount,
        },
        dispatch
    )
}

export const UseConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Users))
export const UsersWithTheme = withTheme(UseConnected)

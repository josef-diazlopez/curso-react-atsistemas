import React from 'react'
import './List.css'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Header } from './Header/Header'
import { ButtonsCRUD } from '../Buttons/ButtonsCRUD/ButtonsCRUD'

export const List = (props) => {
    const { handleUsers, isList } = props
    const history = useHistory()
    const getUser = () => history.push('/user/' + props.id)
    return (
        <div className="list">
            <div style={{ width: '50%' }}>
                <Header title={props.name} getUser={() => getUser()} />
            </div>
            <div style={{ width: '50%' }}>
                <ButtonsCRUD
                    {...props}
                    isList={isList}
                    handleUser={(e) => {
                        const obj = { action: e, id: props.id }
                        handleUsers({ ...props, obj })
                    }}
                />
            </div>
        </div>
    )
}

List.propTypes = {
    name: PropTypes.string.isRequired,
}

export default withRouter(List)

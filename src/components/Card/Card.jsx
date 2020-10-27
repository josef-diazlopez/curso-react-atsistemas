import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Button } from '../Buttons/Button/Button'
import { FooterSocial } from './FooterSocial/FooterSocial'
import { AiFillDelete } from 'react-icons/ai'
import { FaSyncAlt } from 'react-icons/fa'
import { updateUser, deleteUser } from '../../services/User/userServices'

export const Card = (props) => {
    const history = useHistory()
    const getUser = () => {
        history.push('/user/' + props.id)
    }
    const handleUser = (action) => {
        switch (action) {
            case 'update':
                updateUser(props.id).then((resp) => {
                    props.updateUserList('update', props.id)
                })
                break
            case 'delete':
                deleteUser(props.id).then((resp) => {
                    props.updateUserList('delete', props.id)
                })
                break
            default:
                break
        }
    }
    return (
        <div className="card">
            <div className="card-header">
                <h1 onClick={() => getUser()}>{props.name}</h1>
            </div>
            <div className="card-body">{props.children}</div>
            <div className="card-footer">
                <FooterSocial></FooterSocial>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button action="update" updateUser={(e) => handleUser(e)}>
                    <FaSyncAlt />
                </Button>
                <Button action="delete" deleteUser={(e) => handleUser(e)}>
                    <AiFillDelete />
                </Button>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
}

export default withRouter(Card)

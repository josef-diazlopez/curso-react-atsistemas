import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FooterSocial } from './FooterSocial/FooterSocial'

export const Card = (props) => {
    const history = useHistory()
    const getUser = () => {
        history.push('/user/' + props.id)
    }
    return (
        <div className="card">
            <div className="float-btn"></div>
            <div className="card-header">
                <h1 onClick={() => getUser()}>{props.name}</h1>
                {props.id && (
                    <Link to={`${/user/}` + props.id}>
                        <h5>with JSX</h5>
                    </Link>
                )}
            </div>
            <div className="card-body">{props.children}</div>
            <div className="card-footer">
                <FooterSocial></FooterSocial>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
}

export default withRouter(Card)

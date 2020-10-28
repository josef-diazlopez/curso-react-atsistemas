import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Header } from './Header/Header'
import { FooterSocial } from './FooterSocial/FooterSocial'
import { ButtonsCRUD } from '../Buttons/ButtonsCRUD/ButtonsCRUD'

export const Card = (props) => {
    const { handleUsers, isList } = props
    const history = useHistory()
    const getUser = () => history.push('/user/' + props.id)
    return (
        <div className="card">
            <Header title={props.name} getUser={() => getUser()} />
            {props.children}
            {!isList && <FooterSocial></FooterSocial>}
            {isList && (
                <ButtonsCRUD
                    {...props}
                    handleUser={(e) => {
                        const obj = { action: e, id: props.id }
                        handleUsers({ ...props, obj })
                    }}
                />
            )}
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
}

export default withRouter(Card)

import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { RoundedButton } from '../Buttons/RoundedButton/RoundedButton'

const Card = (props) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '50%',
                }}
            >
                <RoundedButton color="yellow" />
            </div>
            <div
                style={{
                    width: '50%',
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '10px',
                }}
            >
                <Header name={props.name} />
                {props.children}
                <Footer />
            </div>
        </>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Card

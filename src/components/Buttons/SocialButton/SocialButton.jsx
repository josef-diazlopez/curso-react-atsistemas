import React from 'react'
import PropTypes from 'prop-types'
import '../styles.buttons.css'

/** Constantes */
export const FACEBOOK = 'facebook'
export const TWITTER = 'twitter'
export const INSTAGRAM = 'instagram'

export const SocialButton = (props) => {
    return (
        <div style={{ margin: '3%' }}>
            <a
                href={props.data.url}
                target="blank"
                style={{ color: props.data.color }}
            >
                {props.data.icon}
            </a>
        </div>
    )
}

SocialButton.propTypes = {
    icon: PropTypes.oneOf([FACEBOOK, TWITTER, INSTAGRAM]),
}

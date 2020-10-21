import React from 'react'
import PropTypes from 'prop-types'
import { SocialButton } from '../Buttons/SocialButton/SocialButton'
import { FaFacebookF, FaSpotify } from 'react-icons/fa'
import { SiTwitter, SiAnchor, SiApplepodcasts } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'

export const Footer = () => {
    const buttons = [
        {
            icon: <SiAnchor />,
            color: 'slateblue',
            text: 'Anchor',
            url: 'https://anchor.fm/rsostenido',
        },
        {
            icon: <SiApplepodcasts />,
            color: 'darkorchid',
            text: 'Apple Podcasts',
            url:
                'https://podcasts.apple.com/us/podcast/rsostenido-el-podcast/id1503998532?l=es',
        },
        {
            icon: <FaSpotify />,
            color: 'lawngreen',
            text: 'Spotify',
            url: 'https://www.spotify.com/rsostenido',
        },
        {
            icon: <SiTwitter />,
            color: 'cornflowerblue',
            text: 'Twitter',
            url: 'https://twitter.com/rsostenido',
        },
        {
            icon: <FaFacebookF />,
            color: 'blue',
            text: 'Facebook',
            url:
                'https://www.facebook.com/pages/category/Podcast/RSostenido-El-Podcast-114216250439263/',
        },
        {
            icon: <AiFillInstagram />,
            color: 'purple',
            text: 'Instagram',
            url: 'https://www.instagram.com/rsostenido/?hl=es',
        },
    ]
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', margin: '5%' }}
        >
            {buttons.map((button, index) => {
                return <SocialButton key={index} data={button} />
            })}
        </div>
    )
}

Footer.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object),
}

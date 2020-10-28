import React from 'react'

export const Title = (props) => {
    const { children, title } = props
    return (
        <h2>
            {title}
            {children}
        </h2>
    )
}

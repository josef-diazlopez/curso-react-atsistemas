import React from 'react'
import './Button.css'

export const Button = (props) => {
    const clickButton = (action) => {
        switch (action) {
            case 'create':
                props.createUser('create')
                break
            case 'update':
                props.updateUser('update')
                break
            case 'delete':
                props.deleteUser('delete')
                break
            default:
                break
        }
    }
    return (
        <div className="button">
            <div onClick={() => clickButton(props.action)}>
                {props.children}
                {props.name}
            </div>
        </div>
    )
}

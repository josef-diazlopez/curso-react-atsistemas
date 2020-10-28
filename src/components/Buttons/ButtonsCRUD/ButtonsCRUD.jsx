import React from 'react'

import { AiFillDelete } from 'react-icons/ai'
import { FaSyncAlt } from 'react-icons/fa'
import { Button } from '../../Buttons/Button/Button'

export const ButtonsCRUD = (props) => {
    const { handleUser } = props
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10%',
                }}
            >
                <Button action="update" updateUser={(e) => handleUser(e)}>
                    <FaSyncAlt />
                </Button>
                <Button action="delete" deleteUser={(e) => handleUser(e)}>
                    <AiFillDelete />
                </Button>
            </div>
        </>
    )
}

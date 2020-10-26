import React from 'react'
import { Users } from '../../pages/Users'
import { User } from '../../pages/User'

const routes = {
    '/': () => <Users />,
    '/user': () => <User />,
}
export default routes

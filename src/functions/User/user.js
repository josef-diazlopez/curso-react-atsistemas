import {
    createUser as createService,
    updateUser as updateService,
    deleteUser as deleteService,
} from '../../services/User/userServices'

export const handleUsers = (props) => {
    const { createUser, updateUser, deleteUser } =
        props && props.e && props.e.users
    let { action, id } =
        (props && props.e && props.e.e) ||
        (props && props.e && props.e.e && props.e.e.obj)
    if (props && props.e && props.e.e && props.e.e.obj) {
        action = props.e.e.obj.action
    } else {
        action =
            (props && props.e && props.e.e) ||
            (props && props.e && props.e.e && props.e.e.obj.action)
    }
    switch (action) {
        case 'create':
            createService().then((resp) => {
                createUser({
                    id: resp.id,
                    email: 'rgm93@icloud.com',
                    first_name: 'Ruben',
                    last_name: 'Gonzalez',
                    avatar:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
                })
            })
            break
        case 'update':
            updateService(props.id).then(() => {
                updateUser({
                    id: 1,
                    email: 'RSostenidoOficial@gmail.com',
                    first_name: 'RSostenido',
                    last_name: 'El Podcast',
                    avatar:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
                })
            })
            break
        case 'delete':
            deleteService(props.id).then(() => deleteUser(id))
            break
        default:
            break
    }
}

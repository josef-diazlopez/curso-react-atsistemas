import axios from 'axios'
const API_USERS = 'https://reqres.in/api/users/'

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_USERS)
            .then((response) => {
                resolve(response.data.data)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getUser = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_USERS + id)
            .then((response) => {
                resolve({ user: response.data.data, ad: response.data.ad })
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const createUser = (newUser) => {
    return new Promise((resolve, reject) => {
        axios
            .post(API_USERS, newUser)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const updateUser = (id, newUser) => {
    return new Promise((resolve, reject) => {
        axios
            .patch(API_USERS + id, newUser)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(API_USERS + id)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

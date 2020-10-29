import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '../Buttons/Button/Button'
import { IoMdAddCircle } from 'react-icons/io'
import { Title } from '../Title/Title'
import { List } from '../List/List'
import { Pagination } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10%',
        color: 'green',
    },
    dark: {
        marginTop: '10%',
        color: 'green',
        color: theme.palette.common.white,
        backgroundColor: 'white',
        padding: '20px 50px',
        borderRadius: '5rem',
        margin: '5% 5% 0% 5%',
    },
}))

export const ListUser = (props) => {
    const { handleUsers, theme, users } = props

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(2)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = users.data.slice(indexOfFirstPost, indexOfLastPost)
    const indexPages = users.data.length / postsPerPage
    console.log('props', props)
    useEffect(() => {
        console.log('hola')
    }, [])
    const onChangePage = (e, newPage) => {
        setCurrentPage(newPage)
    }
    const classes = useStyles()
    return (
        <>
            {currentPosts && (
                <>
                    {currentPosts.map((user) => (
                        <List
                            name={`${user.first_name} ${user.last_name}`}
                            key={user.id}
                            id={user.id}
                            isList={true}
                            handleUsers={(e) => handleUsers({ ...props, e })}
                        ></List>
                    ))}
                    <Pagination
                        className={!theme.dark ? classes.dark : classes.root}
                        color="primary"
                        page={currentPage}
                        count={indexPages}
                        onChange={onChangePage}
                    />
                </>
            )}

            {users && users.data.length === 0 && <h1>No hay usuarios</h1>}
        </>
    )
}

export const UsersPresenter = (props) => {
    const { counter, handleUsers, theme, users } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <Title title={`Num of Users: ${counter.counter.count}`}></Title>
            <Button
                name="Create user"
                action="create"
                createUser={(e) => handleUsers({ ...props, e, users })}
            >
                <IoMdAddCircle />
            </Button>
            <ListUser {...props} />
        </header>
    )
}

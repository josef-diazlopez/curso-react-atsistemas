import React from 'react'
import axios from 'axios'
import { Card } from './../components/Card/Card'
import { Body } from './../components/Card/Body/Body'

export class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            ad: {},
            counter: 1,
        }
    }
    componentDidMount() {
        this.getUser()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            this.getUser()
        }
    }
    getUser = () => {
        axios
            .get('https://reqres.in/api/users/' + this.state.counter)
            .then((response) => {
                this.setState({
                    user: response.data.data,
                    ad: response.data.ad,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {
        console.log('this.state', this.state)
        const { user, ad, counter } = this.state
        return (
            <header className="App-header">
                <div style={{ display: 'flex' }}>
                    <h1
                        onClick={() =>
                            this.state.counter > 1 &&
                            this.setState({
                                counter: this.state.counter - 1,
                            })
                        }
                    >
                        {'<'}
                    </h1>
                    <h1 style={{ marginLeft: '30px', marginRight: '30px' }}>
                        {' '}
                        ID: {counter}
                    </h1>
                    <h1
                        onClick={() =>
                            this.setState({ counter: this.state.counter + 1 })
                        }
                    >
                        {'>'}
                    </h1>
                </div>
                {counter > 1 && (
                    <h3 onClick={() => this.setState({ counter: 1 })}>
                        Back to George
                    </h3>
                )}
                <Card
                    name={`${user.first_name} ${user.last_name}`}
                    key={user.id}
                >
                    <img src={user.avatar} width={150} height={150} alt="img" />
                    <h4>{`${ad.company}`}</h4>
                    <h5>{`${ad.text}`}</h5>
                    <h6>{`${ad.url}`}</h6>
                    <Body texts={[user.email]}></Body>
                </Card>
            </header>
        )
    }
}

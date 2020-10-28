import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from '../Nav/SideBar/SideBar'
import { Provider } from 'react-redux'
import { createStore } from '../../store/store'
import { setCount } from '../../actions/counter/counter'
import { reducers } from '../../reducers/reducers'
import { createReducer } from '../../reducers/utils'

const PageRouter = () => {
    return (
        <Router>
            <Route
                render={({ location, history }) => (
                    <div className="App">
                        <SideBar location={location} history={history} />
                    </div>
                )}
            />
        </Router>
    )
}

function App() {
    return (
        <Provider store={createStore()}>
            <PageRouter />
        </Provider>
    )
}

export default App

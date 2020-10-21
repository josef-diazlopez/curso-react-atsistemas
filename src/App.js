import React from 'react'
import './App.css'
import { Card } from './components/Card/Card'
import { Body } from './components/Body/Body'
import { Users } from './pages/Users'
function App() {
    const description =
        'Podcast donde hablo de cómo montar un podcast desde cero y sobre cómo la tecnología está influyendo en el mundo digital en el que vivimos.'
    return (
        <div className="App">
            {/*<header className="App-header">
                <Card name="RSostenido: El Podcast">
                    <Body content={description} />
                </Card>
             </header>*/}
            <Users />
        </div>
    )
}

export default App

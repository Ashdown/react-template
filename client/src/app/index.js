import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import rootReducer from '../reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import {NavBar} from '../components'
import {PeopleList, AnimalList, ToolList} from '../pages'

const store = createStore(rootReducer)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/people" exact component={PeopleList}/>
                    <Route path="/animals" exact component={AnimalList}/>
                    <Route path="/tools" exact component={ToolList}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { PeopleList, PeopleInsert, PeopleUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/people/list" exact component={PeopleList} />
                <Route path="/people/create" exact component={PeopleInsert} />
                <Route
                    path="/people/update/:id"
                    exact
                    component={PeopleUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
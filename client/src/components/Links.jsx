import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Links extends Component {
    render() {
        return (
            <>
                <Link to="/" className="navbar-brand">
                    React Template App
                </Link>
                <ul>
                    <li>
                        <Link to="/people" className="nav-link">
                            People: Vanilla React
                        </Link>
                    </li>
                </ul>
            </>
        )
    }
}

export default Links
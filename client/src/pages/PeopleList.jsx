import React, {Component} from 'react'
import ReactTable from 'react-table'
import api from '../api'

const Person = ({name, age}) =>
    <li>
        {name} ({age})
        <button>Delete</button>
    </li>

class PeopleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true})

        await api.getAllPeople().then(people => {
            this.setState({
                people: people.data.data,
            })
        })
    }

    addSteve = () => api.insertPerson({name: 'Steve', age: 30}).then(response => console.log('response', response))

    render() {
        const {people} = this.state

        return (
            <div>
                <h1>People List</h1>
                <button onClick={this.addSteve}>Add Steve</button>
                {people.length > 0 &&
                <ul>
                    {people.map(person => <Person {...person}/>)}
                </ul>
                }
            </div>
        )
    }
}

export default PeopleList
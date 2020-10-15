import React, {Component} from 'react'
import ReactTable from 'react-table'
import api from '../api'

const Person = ({data, onDeletePerson}) =>
    <li>
        {data.name} ({data.age})
        <button onClick={onDeletePerson(data._id)}>Delete</button>
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
            console.log('people', people)
        })
    }

    onAddPerson = event => {
        event.preventDefault()
        const {elements} = event.target
        const name = elements.name.value
        const age = elements.age.value
        api.insertPerson({name, age}).then(response => {
            if (response.status === 201) {
                const newPeople = [{name, age}]
                this.setState({people: this.state.people.concat(newPeople)})
            }
        })
    }

    onDeletePerson = personId => event => {
        event.preventDefault()
        api.deletePersonById(personId).then(response => {
            if(response.stats = 200) {
                this.setState({
                    people: this.state.people.filter( person => person._id !== personId)
                })

            }

        })
    }



    render() {
        const {people} = this.state
        return (
            <div>
                <h1>People List</h1>
                <h2>Add New Person</h2>
                <form onSubmit={this.onAddPerson}>
                    <input type="text" placeholder="Enter name..." name="name"/>
                    <input type="number" placeholder="Age..." name="age"/>
                    <button type="submit">Add</button>
                </form>
                {people.length > 0 &&
                <>
                    <h2>All People</h2>
                    <ul>
                        {people.map((person, index) => <Person key={index} data={person} onDeletePerson={this.onDeletePerson}/>)}
                    </ul>
                </>
                }
            </div>
        )
    }
}

export default PeopleList
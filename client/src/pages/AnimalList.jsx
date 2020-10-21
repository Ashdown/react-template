import React, {Component} from 'react'
import {addAnimal, deleteAnimal, loadAnimals} from '../actions/animals'
import {connect} from 'react-redux'
import api from "../api"

const Animal = ({data, onDeleteAnimal}) =>
    <li>
        {data.name} ({data.legs})
        <button onClick={onDeleteAnimal(data._id)}>Delete</button>
    </li>

class AnimalList extends Component {

    componentDidMount = () => {
        const {loadAnimals} = this.props
        api.getAllAnimals().then(response => {
            if (response.status === 200) {
                loadAnimals(response.data.data)
            }
        })
    }

    onAddAnimal = event => {
        const {addAnimal} = this.props
        event.preventDefault()
        const {elements} = event.target
        const name = elements.name.value
        const legs = elements.legs.value
        api.insertAnimal({name, legs}).then(response => {
            if (response.status === 201) {
                addAnimal({_id: response.data._id, name, legs})
            }
        })
    }

    onDeleteAnimal = _id => event => {
        const { deleteAnimal} = this.props
        event.preventDefault()
        api.deleteAnimalById(_id).then(response => {
            if (response.status === 200) {
                deleteAnimal(_id)
            }
        })
    }

    render() {
        const {animals = []} = this.props
        return (
            <div>
                <h1>Animal List</h1>
                <h2>Add New Animal</h2>
                <form onSubmit={this.onAddAnimal}>
                    <input type="text" placeholder="Enter name..." name="name"/>
                    <input type="number" placeholder="Legs..." name="legs"/>
                    <button type="submit">Add</button>
                </form>
                {animals.length > 0 &&
                <>
                    <h2>All Animals</h2>
                    <ul>
                        {animals.map((animal, index) => <Animal key={animal._id} data={animal}
                                                                onDeleteAnimal={this.onDeleteAnimal}/>)}
                    </ul>
                </>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    animals: state.animals
})

const mapDispatchToProps = dispatch => ({
    loadAnimals: data => dispatch(loadAnimals(data)),
    addAnimal: data => dispatch(addAnimal(data)),
    deleteAnimal: _id => dispatch(deleteAnimal(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList)
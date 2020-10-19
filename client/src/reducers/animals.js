import { LOAD_ANIMALS, ADD_ANIMAL, DELETE_ANIMAL } from '../actions/animals'

const animals = (state = [], action) => {
    switch (action.type) {
        case LOAD_ANIMALS:
            return action.data
        case ADD_ANIMAL:
            const { data = {} } = action
            return [
                ...state,
                {
                    _id: data._id,
                    name: data.name,
                    legs: data.legs
                }
            ]
        case DELETE_ANIMAL:
            const { _id } = action
            return state.filter(animal => animal._id !== _id)
        default:
            return state

    }
}

export default animals
//action types
export const LOAD_ANIMALS = 'LOAD_ANIMALS'
export const ADD_ANIMAL = 'ADD_ANIMAL'
export const DELETE_ANIMAL = 'DELETE_ANIMAL'

//action creators

export const loadAnimals = data => ({
    type: LOAD_ANIMALS,
    data,
})

export const addAnimal = data => ({
    type: ADD_ANIMAL,
    data,
})

export const deleteAnimal = _id => ({
    type: DELETE_ANIMAL,
    _id
})
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

const getAllPeople = () => api.get(`/people`)
const deletePersonById = id => api.delete(`/people/${id}`)
const insertPerson = payload => api.post(`/people`, payload)
const getAllAnimals = () => api.get(`/animals`)
const deleteAnimalById = _id => api.delete(`/animals/${_id}`)
const insertAnimal = payload => api.post(`/animals`, payload)

const apis = {
    getAllPeople,
    deletePersonById,
    insertPerson,
    getAllAnimals,
    deleteAnimalById,
    insertAnimal,
}

export default apis
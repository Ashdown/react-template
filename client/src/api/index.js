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
const getAllTools = () => api.get(`/tools`)
const deleteToolById = _id => api.delete(`/tools/${_id}`)
const insertTool = payload => api.post(`/tools`, payload)

const apis = {
    getAllPeople,
    deletePersonById,
    insertPerson,
    getAllAnimals,
    deleteAnimalById,
    insertAnimal,
    getAllTools,
    deleteToolById,
    insertTool,
}

export default apis
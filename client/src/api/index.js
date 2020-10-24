import axios from 'axios'
import {Tool} from "../actions/tools";

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

const getAllPeople = () => api.get(`/people`)
const deletePersonById = id => api.delete(`/people/${id}`)
const insertPerson = payload => api.post(`/people`, payload)
const getAllAnimals = () => api.get(`/animals`)
const deleteAnimalById = _id => api.delete(`/animals/${_id}`)
const insertAnimal = payload => api.post(`/animals`, payload)

const getAllTools = () => new Promise((resolve) => {
    api.get(`/tools`).then(response => {
        if (response.status = 200) {
            resolve(response.data.data)
        }
    })
})

const insertTool = (newTool) => new Promise( resolve => {
    api.post('/tools', newTool).then(response => {
        if (response.status === 201) {
            const data = response.data
            const _id = data._id
            resolve({_id, ...newTool})
        }
    })
})

const deleteTool = (_id) => new Promise( resolve => {
    api.delete(`/tools/${_id}`).then((response) => {
        if (response.status === 200) {
            resolve(_id)
        }
    })
})

const deleteToolById = _id => api.delete(`/tools/${_id}`)

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
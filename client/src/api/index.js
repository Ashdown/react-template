import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllPeople = () => api.get(`/people`)
export const deletePersonById = id => api.delete(`/people/${id}`)

const apis = {
    getAllPeople,
    deletePersonById,
}

export default apis
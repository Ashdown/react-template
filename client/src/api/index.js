import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllPeople = () => api.get(`/people`)
export const deletePersonById = id => api.delete(`/people/${id}`)
export const insertPerson = payload => api.post(`/people`, payload)


const apis = {
    getAllPeople,
    deletePersonById,
    insertPerson,
}

export default apis
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertPerson = payload => api.post(`/people`, payload)
export const getAllPeople = () => api.get(`/people`)
export const updatePersonById = (id, payload) => api.put(`/people/${id}`, payload)
export const deletePersonById = id => api.delete(`/people/${id}`)
export const getPersonById = id => api.get(`/people/${id}`)

const apis = {
    insertPerson,
    getAllPeople,
    updatePersonById,
    deletePersonById,
    getPersonById,
}

export default apis
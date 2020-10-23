import { LOAD_TOOLS, ADD_TOOL, DELETE_TOOL } from '../actions/tools'

const tools = (state = [], action) => {
    switch (action.type) {
        case LOAD_TOOLS:
            return action.data
        case ADD_TOOL:
            const { data = {} } = action
            return [
                ...state,
                {
                    _id: data._id,
                    name: data.name,
                    legs: data.legs
                }
            ]
        case DELETE_TOOL:
            const { _id } = action
            return state.filter(tool => tool._id !== _id)
        default:
            return state

    }
}

export default tools
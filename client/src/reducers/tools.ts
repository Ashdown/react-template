import {ActionTypes, Tool, Action} from '../actions/tools'

const tools = (state: Tool[] = [], action: Action):Tool[] => {
    switch (action.type) {
        case ActionTypes.LOAD_TOOLS:
            return action.data
        case ActionTypes.ADD_TOOL:
            const {data} = action
            return [
                ...state,
                data || {},
            ]
        case ActionTypes.DELETE_TOOL:
            const {_id} = action
            return state.filter(tool => tool._id !== _id)
        default:
            return state

    }
}

export default tools
//action types
export const LOAD_TOOLS = 'LOAD_TOOLS'
export const ADD_TOOL = 'ADD_TOOL'
export const DELETE_TOOL = 'DELETE_TOOL'

//action creators

export const loadTools = data => ({
    type: LOAD_TOOLS,
    data,
})

export const addTool = data => ({
    type: ADD_TOOL,
    data,
})

export const deleteTool = _id => ({
    type: DELETE_TOOL,
    _id
})
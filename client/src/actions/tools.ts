export enum ActionTypes {
    LOAD_TOOLS = 'load_tools',
    ADD_TOOL = 'add_tool',
    DELETE_TOOL = 'delete_tool'
}

export interface Tool {
    _id: string,
    name: string,
    points: number
}

export type Action =
    {
        type: ActionTypes.LOAD_TOOLS
        data: Tool[]
    } |
    {
        type: ActionTypes.ADD_TOOL
        data: Tool,
    } |
    {
        type: ActionTypes.DELETE_TOOL
        _id: string
    }

export const loadTools = (data:Tool[]):Action => ({
    type: ActionTypes.LOAD_TOOLS,
    data,
})

export const addTool = (data:Tool):Action => ({
    type: ActionTypes.ADD_TOOL,
    data,
})

export const deleteTool = (_id:string):Action => ({
    type: ActionTypes.DELETE_TOOL,
    _id
})
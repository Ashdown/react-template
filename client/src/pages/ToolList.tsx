import React, {useEffect, useRef} from 'react'
import api from '../api/index'
import {addTool, deleteTool, loadTools, Tool} from '../actions/tools'
import {connect} from 'react-redux'
import {ToolItem} from '../components/'

interface ToolListProps {
    loadTools: (data:Tool[]) => void,
    addTool: (data:Tool) => void,
    deleteTool: (_id:string) => void,
    tools: Tool[],
}

const ToolList: React.FC<ToolListProps> = ({loadTools, addTool, deleteTool, tools}) => {

    const nameRef = useRef<HTMLInputElement>(null)
    const pointsRef = useRef<HTMLInputElement>(null)

    const onAddTool = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        const name:string = nameRef.current && nameRef.current.value ? nameRef.current.value : ''
        const points:number = pointsRef.current && pointsRef.current.value ? parseInt(pointsRef.current.value) : 0
        api.insertTool({name, points}).then((newTool:Tool) => addTool(newTool))
    }

    const onDeleteTool = (toolId:string) => (event:React.MouseEvent):void => {
        event.preventDefault()
        api.deleteToolById(toolId).then(() => deleteTool(toolId))
    }

    useEffect(() => {
        api.getAllTools().then((tools:Tool[])=>loadTools(tools))
    }, [])

    return (
        <div>
            <h1>Tool List</h1>
            <h2>Add New Tool</h2>
            <form onSubmit={onAddTool}>
                <input ref={nameRef} type="text" placeholder="Enter name..." name="name"/>
                <input ref={pointsRef} type="number" placeholder="Points..." name="points"/>
                <button type="submit">Add</button>
            </form>
            {tools.length > 0 &&
            <>
                <h2>All Tool</h2>
                <ul>
                    {tools.map((tool, index) => <ToolItem key={index} data={tool} onDeleteTool={onDeleteTool}/>)}
                </ul>
            </>
            }
        </div>
    )
}

interface State {
    tools: Tool[]
}

const mapStateToProps = (state:State) => ({
    tools: state.tools
})

const mapDispatchToProps = (dispatch:any) => ({
    loadTools: (data:Tool[]) => dispatch(loadTools(data)),
    addTool: (data:Tool) => dispatch(addTool(data)),
    deleteTool: (_id:string) => dispatch(deleteTool(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolList)
import React, {Component, useState, useRef} from 'react'
import api from '../api'
import {addTool, deleteTool, loadTools} from '../actions/tools'
import {connect} from 'react-redux'
//props
//hooks
//render props

interface PersonData {
    _id: string,
    name: string,
    points: number
}

interface Props {
    data: PersonData,
    onDeleteTool: (_id: string) => React.MouseEventHandler,
}

const Tool: React.FC<Props> = ({data, onDeleteTool}) => {

    // const [clickCount, setClickCount] = useState<number|null>(0)

    // setClickCount(null)

    const itemRef = useRef<HTMLLIElement>(null)

    return (
        <li ref={itemRef}>
            {data.name} ({data.points})
            <button onClick={onDeleteTool(data._id)}>Delete</button>
        </li>
    )
}

interface ToolListProps {

}

interface ToolListState {

}

class ToolList extends Component<ToolListProps, ToolListState> {

    componentDidMount = () => {

        const {loadTools} = this.props
        api.getAllTools().then(response => {
            if (response.status === 200) {
                loadTools(response.data.data)
            }
        })
    }

    onAddTool = event => {
        event.preventDefault()
        const {elements} = event.target
        const name = elements.name.value
        const points = elements.points.value
        api.insertTool({name, points}).then(response => {
            if (response.status === 201) {
                const {data} = response
                const {_id} = data
                const newTool = [{_id, name, points}]
                addTool(newTool)
            }
        })
    }

    onDeleteTool = toolId => event => {
        event.preventDefault()
        api.deleteToolById(toolId).then(response => {
            if (response.status === 200) {
                deleteTool(toolId)
            }

        })
    }

    render() {
        const {tools} = this.props
        return (
            <div>
                <h1>Tool List</h1>
                <h2>Add New Tool</h2>
                <form onSubmit={this.onAddTool}>
                    <input type="text" placeholder="Enter name..." name="name"/>
                    <input type="number" placeholder="Points..." name="points"/>
                    <button type="submit">Add</button>
                </form>
                {tools.length > 0 &&
                <>
                    <h2>All Tool</h2>
                    <ul>
                        {tools.map((tool, index) => <Tool key={index} data={tool} onDeleteTool={this.onDeleteTool}/>)}
                    </ul>
                </>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tools: state.tools
})

const mapDispatchToProps = dispatch => ({
    loadTools: data => dispatch(loadTools(data)),
    addTool: data => dispatch(addTool(data)),
    deleteTool: _id => dispatch(deleteTool(_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolList)
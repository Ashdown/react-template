import React, { useState, useRef} from "react"
import {Tool} from '../actions/tools'

interface Props {
    data: Tool,
    onDeleteTool: (_id: string) => React.MouseEventHandler
}

const ToolItem:React.FC<Props> = ({data, onDeleteTool}) => {

    const [clickerCount, setClickerCount] = useState<number>(0)

    const itemRef = useRef<HTMLLIElement>(null)

    const onFocus = event => {
        event.preventDefault()
        if (itemRef.current !== null) {
            itemRef.current.focus()
        }
    }



    return (
        <li>
            {data.name} (Points: {data.points}) (Clicks: {clickerCount})
            <button onClick={onDeleteTool(data._id)}>Delete</button>
            <button onClick={() => setClickerCount(clickerCount + 1)}>Clicker</button>
            <button onClick={onFocus}>Focus</button>
        </li>
    )
}

export default ToolItem
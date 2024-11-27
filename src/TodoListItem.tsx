import * as React from "react";
import {useCallback} from "react";


export default function TodoListItem({task, onChange, onDelete}) {
    const [value, setValue] = React.useState(task.text);
    const [editing, setEditing] = React.useState(true);

    const itemId = task.id;

    const handleChange = e => {
        console.log('item value change', itemId, e.target.value);
        setValue(e.target.value);
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            console.log('handleKeyDown save', itemId, value);
            onChange({...task, text: value});
        }
    }

    const handleBlur = () => {
        console.log('handleBlur save', itemId, value);
        setEditing(false);
        onChange({...task, text: value});
    }

    const handleCheckboxChange = e => {
        setEditing(!editing);
        onChange({...task, isCompleted: !task.isCompleted});
    }

    const handleClick = () => {
        if (editing) return;
        setEditing(true);
    }

    const editingStyle = editing ? {} : {
        backgroundColor: '#f0f0f0', color: '#888',
    }

    return (
        <>
            <input type={"checkbox"} checked={task.isCompleted} onChange={handleCheckboxChange}/>
            {
                task.isCompleted ? <del><div style={{width: '200px', wordWrap: 'break-word'}}>{value}</div></del> :
                    <input
                        defaultValue={task.text}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        readOnly={!editing}
                        onBlur={handleBlur}
                        onClick={handleClick}
                        style={{...editingStyle, width: '193px'}}/>
            }

            <button onClick={() => onDelete(itemId)}>X</button>
        </>
    )
}
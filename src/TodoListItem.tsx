import * as React from "react";
import {useCallback} from "react";


export default function TodoListItem({task, onChange, onDelete}) {
    const [value, setValue] = React.useState(task.text);
    const [editing, setEditing] = React.useState(true);

    const itemId = task.id;

    const handleChange = useCallback(e => {
        console.log('item value change', itemId, e.target.value);
        setValue(e.target.value);
    }, [value])

    const handleKeyDown = useCallback(e => {
        if (e.key === 'Enter') {
            console.log('handleKeyDown save', itemId, value);
            onChange({...task, text: value});
        }
    }, [value])

    const handleBlur = useCallback(() => {
        console.log('handleBlur save', itemId, value);
        setEditing(false);
        onChange({...task, text: value});
    }, [value, editing])

    const handleCheckboxChange = useCallback(e => {
        setEditing(!editing);
        onChange({...task, isCompleted: !task.isCompleted});
    }, [task, editing])

    const handleClick = useCallback(() => {
        if (editing) return;
        setEditing(true);
    }, [editing])

    const editingStyle = editing ? {} : {
        backgroundColor: '#f0f0f0', color: '#888'
    }

    return (
        <>
            <input type={"checkbox"} checked={task.isCompleted} onChange={handleCheckboxChange}/>
            {
                task.isCompleted ? <del>{value}</del> :
                    <input
                        defaultValue={task.text}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        readOnly={!editing}
                        onBlur={handleBlur}
                        onClick={handleClick}
                        style={editingStyle}/>
            }

            <button onClick={() => onDelete(itemId)}>X</button>
        </>
    )
}
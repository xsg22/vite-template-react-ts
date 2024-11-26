import * as React from "react";
import {useCallback} from "react";


export default function TodoListItem({itemId, initValue, onChange, onDelete}) {
    console.log('render', itemId, initValue);
    const [value, setValue] = React.useState(initValue);
    const [checked, setChecked] = React.useState(false);
    const [editing, setEditing] = React.useState(true);

    const handleChange = useCallback(e => {
        console.log('item value change', itemId, e.target.value);
        setValue(e.target.value);
    }, [value])

    const handleKeyDown = useCallback(e => {
        if (e.key === 'Enter') {
            console.log('handleKeyDown save', itemId, value);
            onChange(itemId, value);
        }
    }, [value])

    const handleBlur = useCallback(() => {
            console.log('handleBlur save', itemId, value);
            onChange(itemId, value);
    }, [value])

    const handleCheckboxChange = useCallback(e => {
        setChecked(!checked);
        setEditing(!editing);
    }, [checked, editing])

    const editingStyle = editing ? {} : {
        backgroundColor: '#f0f0f0', color: '#888'
    }

    return (
        <>
            <input type={"checkbox"} checked={checked} onChange={handleCheckboxChange}/>
            <input
                defaultValue={initValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                readOnly={!editing}
                onBlur={handleBlur}
                style={editingStyle}/>
            <button onClick={() => onDelete(itemId)}>X</button>
        </>
    )
}
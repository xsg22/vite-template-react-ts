import * as React from 'react';
import { useCallback } from 'react';

export default ({ task, onChange, onDelete }): React.JSX.Element => {
    const [value, setValue] = React.useState(task.text);
    const [editing, setEditing] = React.useState(false);

    const itemId = task.id;

    const handleChange = useCallback(e => {
        console.log('item value change', itemId, e.target.value);
        setValue(e.target.value);
    }, []);

    const handleKeyDown = useCallback(e => {
        if (e.key === 'Enter') {
            console.log('handleKeyDown save', itemId, value);
            onChange({...task, text: value});
        }
    }, [value, onChange]);

    const handleBlur = useCallback(() => {
        console.log('handleBlur save', itemId, value);
        setEditing(false);
        onChange({...task, text: value});
    }, [value, onChange]);

    const handleCheckboxChange = useCallback(e => {
        onChange({...task, isCompleted: !task.isCompleted});
    }, [onChange]);

    const handleClick = useCallback(() => {
        setEditing(true);
    }, []);

    const handleDelete = useCallback(() => {
        onDelete(itemId);
    }, [onDelete]);

    const editingStyle = editing ? {} : {
        backgroundColor: '#f0f0f0', color: '#888',
    }

    return (
        <>
            <input type="checkbox" checked={task.isCompleted} onChange={handleCheckboxChange}/>
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

            <button onClick={handleDelete}>X</button>
        </>
    )
}

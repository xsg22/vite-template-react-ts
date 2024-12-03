import * as React from "react";
import {type Task} from "../../snapshots/tasks";
import {useCallback} from "react";

type Props = {
    task: Task,
    updateTask: (task: Task) => void,
    deleteTask: (id: number) => void,
}

export default ({task, updateTask, deleteTask}: Props) => {
    const [value, setValue] = React.useState(task.title)

    const handleKeyDown = useCallback(e => {
        if (e.key === "Enter") {
            console.log('key: ', value);
            updateTask({...task, title: value, isEditing: false});
        }
    }, [value]);

    const handlerOnChange = useCallback((e) => {
        console.log('value 1: ', e.target.value);
        setValue(e.target.value);
    }, []);

    const handlerOnClick = useCallback(() => {
        console.log('click ', task);
        if (task.isEditing === true) return;
        updateTask({...task, isEditing: true});
    }, [task]);

    const handlerCheckboxChange = useCallback(e => {
        updateTask({...task, isCompleted: e.target.checked});
    }, [task]);

    const handlerDeleteTask = useCallback(() => {
        deleteTask(task.id);
    }, [task]);

    const completeStyle = task.isCompleted ? ' text-gray-400' : '';

    return (
        <>
            <input className='basis-1/12 size-4 mt-1.5' type={"checkbox"} checked={task.isCompleted}
                   onChange={handlerCheckboxChange}/>
            {
                !task.isEditing ?
                    <p className={'basis-5/6 break-all' + completeStyle} onClick={handlerOnClick}>{task.title}</p> :
                    <input className={'basis-5/6 break-all' + completeStyle} type={"text"} value={value} onKeyDown={handleKeyDown}
                           onChange={handlerOnChange} autoFocus={task.isEditing}/>
            }
            <button className='basis-1/12 text-red-400 rounded-full border-2 bg-white size-7'
                    onClick={handlerDeleteTask}>X
            </button>
        </>
    )
}
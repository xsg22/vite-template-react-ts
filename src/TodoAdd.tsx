import * as React from 'react';


export default function TodoAdd({addTask}) {
    const [value, setValue] = React.useState('');

    const handlerAddTask = () => {
        addTask(value);
        setValue('');
    };

    const handlerOnChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handlerOnChange} value={value} />
            <button onClick={handlerAddTask}>Add Task</button>
        </div>
    );
}
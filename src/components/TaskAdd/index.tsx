import * as React from 'react';
import { useCallback } from 'react';

export default ({ addTask }): React.JSX.Element => {
    const [value, setValue] = React.useState('');

    const handlerAddTask = useCallback(() => {
        if (!value) return;
        addTask(value);
        setValue('');
    }, [value]);

    const handlerOnChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <div>
            <input type="text" onChange={handlerOnChange} value={value} />
            <button onClick={handlerAddTask}>Add Task</button>
        </div>
    );
}

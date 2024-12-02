import * as React from "react";
import {useCallback} from "react";


export default ({newTask}): React.JSX.Element => {
    const [value, setValue] = React.useState('')

    const handleKeyDown = useCallback(e => {
        if (e.key === "Enter") {
            if (!value) return;
            console.log('key: ',value);
            newTask(value);
            setValue('');
        }
    }, [value]);

    const handlerOnChange =(e) => {
        console.log('value: ',e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className='bg-white m-4 w-120'>
            <input type={"text"} className='w-full p-2 border-2 border-blue-500 rounded-lg'
                   placeholder='回车新建任务' onKeyDown={handleKeyDown} value={value} onChange={handlerOnChange}/>
        </div>
    );
}

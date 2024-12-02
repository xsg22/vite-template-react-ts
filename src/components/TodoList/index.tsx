import * as React from "react";
import TaskAdd from "./TaskAdd";
import {useTaskState} from "../../snapshots/tasks";


export default (): React.JSX.Element => {
    const {tasks, newTask, updateTask, deleteTask} = useTaskState();

    return (
        <div className='flex flex-col'>
            <TaskAdd newTask={newTask}/>
            <div className='bg-white mt-0 m-4'>
                <h1 className='text-base p-1'>任务列表</h1>
                <ul className=''>
                    {tasks.map((task) => {
                        return (
                            <li className='flex flex-row p-1 rounded border-x-2 border-b-4 border-gray-100'>
                                <input className='basis-1/12 size-4 mt-1.5' type={"checkbox"}/>
                                <input className='basis-5/6' type={"text"} value={task.title}/>
                                <button className='basis-1/12 text-red-400 rounded-full border-2 bg-white size-7'
                                        onClick={() => deleteTask(task.id)}>X
                                </button>
                            </li>);
                    })
                    }
                    < li className='flex flex-row p-1 rounded border-x-2 border-b-4 border-gray-100'>
                        <input className='basis-1/12 size-4 mt-1.5' type={"checkbox"}/>
                        <input className='basis-5/6' type={"text"} value={'任务1'}/>
                        <button className='basis-1/12 text-red-400 rounded-full border-2 bg-white size-7'
                                onClick={() => ""}>X
                        </button>
                    </li>
                    <li className='flex flex-row p-1 rounded border-x-2 border-b-4 border-gray-100'>
                        <input className='basis-1/12 size-4 mt-1.5' type={"checkbox"}/>
                        <input className='basis-5/6' type={"text"} value={'任务2'}/>
                        <button className='basis-1/12 text-red-400 rounded-full border-2 bg-white size-7'
                                onClick={() => ""}>X
                        </button>
                    </li>
                    <li className='flex flex-row p-1 rounded border-x-2 border-b-4 border-gray-100'>
                        <input className='basis-1/12 size-4 mt-1.5' type={"checkbox"} checked={true}/>
                        <p className='basis-5/6 break-all text-gray-400'>任务3</p>
                        <button className='basis-1/12 text-red-400 rounded-full border-2 bg-white size-7'
                                onClick={() => ""}>X
                        </button>
                    </li>
                    <li className='flex flex-row p-1 rounded border-x-2 border-b-4 border-gray-100'>
                        <input className='basis-1/12 size-4 mt-1.5' type={"checkbox"} checked={true}/>
                        <p className='basis-5/6 break-all hyphens-auto text-gray-400'>任务4:任务描述任务描述任务描述任务描述任务描述任务描述</p>
                        <button className='basis-1/12 text-red-400 rounded-full border-2 bg-white size-7'
                                onClick={() => ""}>X
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
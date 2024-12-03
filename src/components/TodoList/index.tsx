import * as React from "react";
import TaskAdd from "./TaskAdd";
import {useTaskState} from "../../snapshots/tasks";
import TaskItem from "./TaskItem";


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
                            <li className='flex flex-row p-1 rounded border-x-2 border-b-4 border-gray-100' key={task.id}>
                                <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
                            </li>);
                    })
                    }
                </ul>
            </div>
        </div>
    )
}
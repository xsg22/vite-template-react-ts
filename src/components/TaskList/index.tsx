import TaskItem from 'components/TaskList/TaskItem';
import * as React from 'react';
import { useTasksState } from 'snapshots/tasks';

export default (): React.JSX.Element => {
    const { tasks, newTask, updateTask, deleteTask } = useTasksState();
    return (
        <table className="table-fixed w-full">
            <caption className="py-2 font-bold text-2xl">任务清单</caption>
            <thead>
            <tr className="bg-neutral-200">
                <th className="p-2 w-8">#</th>
                <th className="p-2 text-left">任务描述</th>
                <th className="p-2 w-32">操作</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
            ))}
            </tbody>
            <tfoot>
            <tr>
                <td colSpan={3} className="p-2 border-t text-right">
                    <button className="rounded py-2 px-6 bg-sky-500 text-white" onClick={newTask}>添加任务</button>
                </td>
            </tr>
            </tfoot>
        </table>
    )
}

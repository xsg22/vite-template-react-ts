import TaskItem from 'components/TaskList/TaskItem';
import * as React from 'react';
import { useTasksState } from 'snapshots/tasks';

export default (): React.JSX.Element => {
    const { tasks, newTask, updateTask, deleteTask } = useTasksState();
    return (
        <table className="task-list">
            <caption>任务清单</caption>
            <thead>
            <tr>
                <th className="task-checkbox-column">#</th>
                <th className="task-title-column">任务描述</th>
                <th className="task-action-column">操作</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
            ))}
            </tbody>
            <tfoot>
            <tr>
                <td colSpan={3}>
                    <button className="primary" onClick={newTask}>添加任务</button>
                </td>
            </tr>
            </tfoot>
        </table>
    )
}

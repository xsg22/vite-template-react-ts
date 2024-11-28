import * as React from 'react';
import { Key, type KeyboardEvent, memo, useCallback } from 'react';
import { type Task } from 'snapshots/tasks';

type Props = {
    key?: Key;
    task: Task;
    updateTask: (task: Task) => void;
    deleteTask: (id: number) => void;
}

export default memo(({ task, updateTask, deleteTask }: Props): React.JSX.Element => {
    const onCheckboxChange = useCallback(() => {
        updateTask({
            ...task,
            isCompleted: !task.isCompleted,
            isEditing: false,
        });
    }, [task, updateTask]);
    const onTitleDoubleClick = useCallback(() => {
        updateTask({
            ...task,
            isEditing: true,
        });
    }, [task, updateTask]);
    const onTitleSubmit = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            updateTask({
                ...task,
                title: event.currentTarget.value,
                isEditing: false,
            });
        }
    }, [task, updateTask]);
    const onDeleteClick = useCallback(() => {
        if (confirm('确认删除该任务？')) {
            deleteTask(task.id);
        }
    }, [task.id, deleteTask]);

    return (
        <tr className="task-item">
            <td className="task-checkbox-column">
                <input type="checkbox" checked={task.isCompleted} onChange={onCheckboxChange} />
            </td>
            <td className="task-title-column">
                {task.isEditing ? (
                    <input type="text" defaultValue={task.title} onKeyDown={onTitleSubmit} />
                ) : (
                    <div onDoubleClick={onTitleDoubleClick}>{task.title}</div>
                )}
            </td>
            <td className="task-action-column">
                <div>
                    <button className="danger" onClick={onDeleteClick}>删除</button>
                </div>
            </td>
        </tr>
    )
})

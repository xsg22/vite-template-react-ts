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
        <tr className="even:bg-neutral-100 hover:bg-sky-100 *:p-2">
            <td className="text-center">
                <input type="checkbox" checked={task.isCompleted} onChange={onCheckboxChange} />
            </td>
            <td onDoubleClick={onTitleDoubleClick}>
                {task.isEditing ? (
                    <input
                        type="text"
                        className="w-full bg-transparent border-b border-b-sky-500 focus:outline-0"
                        defaultValue={task.title}
                        onKeyDown={onTitleSubmit}
                    />
                ) : (
                    <div className={task.isCompleted ? 'line-through' : ''}>{task.title}</div>
                )}
            </td>
            <td className="text-center">
                <div>
                    <button className="text-red-400" onClick={onDeleteClick}>删除</button>
                </div>
            </td>
        </tr>
    )
})

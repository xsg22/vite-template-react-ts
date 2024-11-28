import { useCallback, useState } from 'react';

export type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
    isEditing: boolean;
};

type TasksState = {
    tasks: Task[];
    newTask: () => void;
    updateTask: (task: Task) => void;
    deleteTask: (id: number) => void;
}

let uuid: number = 0;

export const useTasksState = (): TasksState => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const newTask = useCallback(() => {
        setTasks((tasks: Task[]) => ([
            {
                id: ++uuid,
                title: '',
                isCompleted: false,
                isEditing: true,
            } satisfies Task,
            ...tasks,
        ]));
    }, []);
    const updateTask = useCallback((task: Task) => {
        setTasks((tasks: Task[]) => tasks
            .map((it: Task) => it.id === task.id ? task : it)
            .toSorted((a, b) => (
                a.isCompleted === b.isCompleted ? b.id - a.id : a.isCompleted ? 1 : -1
            ))
        );
    }, []);
    const deleteTask = useCallback((id: number) => {
        setTasks((tasks: Task[]) => (
            tasks.filter((task: Task) => task.id !== id)
        ));
    }, []);

    return {
        tasks,
        newTask,
        updateTask,
        deleteTask,
    } satisfies TasksState;
};

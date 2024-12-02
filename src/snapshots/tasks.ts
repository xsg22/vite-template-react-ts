import {useCallback, useState} from "react";


export type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
    isEditing: boolean;
}

type TasksState = {
    tasks: Task[];
    newTask: (title: string) => void;
    updateTask: (task: Task) => void;
    deleteTask: (id: number) => void;
}

let uuid = 0;

export const useTaskState = (): TasksState => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const newTask = useCallback((title: string) => {
        setTasks(tasks => [...tasks, {
            id: uuid++,
            title: title,
            isCompleted: false,
            isEditing: false,
        }]);
    }, []);

    const updateTask = useCallback((task: Task) => {
        setTasks(tasks => tasks.map((t) => t.id === task.id ? task : t));
    }, []);

    const deleteTask = useCallback((id: number) => {
        setTasks(tasks => tasks.filter((t) => t.id !== id));
    }, []);

    return {
        tasks,
        newTask,
        updateTask,
        deleteTask
    }

}
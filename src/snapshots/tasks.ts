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

let uuid = 1;

let data: Task[] = [
    {

        title: "Task 1",
        isCompleted: false,
        id: uuid++,
        isEditing: false,
    },
    {
        title: "Task 2",
        isCompleted: false,
        id: uuid++,
        isEditing: false,
    },
    {
        title: "Task 3",
        isCompleted: true,
        id: uuid++,
        isEditing: false,
    },
    {
        title: "任务4:任务描述任务描述任务描述任务描述任务描述任务描述",
        isCompleted: true,
        id: uuid++,
        isEditing: false,
    }
];

export const useTaskState = (): TasksState => {
    const [tasks, setTasks] = useState<Task[]>(data);
    const newTask = useCallback((title: string) => {
        setTasks(tasks => [...tasks, {
            id: uuid++,
            title: title,
            isCompleted: false,
            isEditing: false,
        } satisfies Task]);
    }, []);

    const updateTask = useCallback((task: Task) => {
        setTasks(tasks => tasks.map((t) => t.id === task.id ? task : t));
    }, []);

    const deleteTask = useCallback((id: number) => {
        setTasks((tasks: Task[]) => (
            tasks.filter((t:Task) => t.id !== id)
        ));
    }, []);

    return {
        tasks,
        newTask,
        updateTask,
        deleteTask
    } satisfies TasksState;

}
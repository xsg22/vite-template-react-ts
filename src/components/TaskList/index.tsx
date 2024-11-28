import TaskAdd from 'components/TaskAdd';
import TaskItem from 'components/TaskItem';
import * as React from 'react';
import { useCallback } from 'react';

export default (): React.JSX.Element => {
    const [todos, setTodos] = React.useState([])

    const addTask = useCallback((text) => {
        const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        console.log('list add after', [...todos, {id: nextId, text: text, isCompleted: false}])
        setTodos([...todos, {id: nextId, text: text, isCompleted: false}]);
    },[todos]);

    const deleteTask = useCallback(id => {
        console.log('delete', id)
        setTodos(todos.filter(todo => todo.id !== id))
    }, [todos]);

    const handlerTaskUpdate = useCallback((task) => {
        console.log('list change', task)
        console.log('list change after', todos, todos.map(todo => todo.id === task.id ? task : todo))
        setTodos(todos.map(todo => todo.id === task.id ? task : todo))
    },[todos]);

    return (
        <>
            <TaskAdd addTask={addTask} />
            <div>
                <p>未完成列表</p>
                {todos.filter(todo => !todo.isCompleted)
                    .map(todo => (<li className="taskUncompletedList" key={todo.id}>
                        <TaskItem
                                key={todo.id}
                                task={todo}
                                onDelete={deleteTask}
                                onChange={handlerTaskUpdate}
                            />
                        </li>)
                    )}
            </div>

            <div>
                <p>完成列表</p>
                {todos.filter(todo => todo.isCompleted)
                    .map(todo => (<li className="taskCompletedList" key={todo.id}>
                        <TaskItem
                                key={todo.id}
                                task={todo}
                                onDelete={deleteTask}
                                onChange={handlerTaskUpdate}
                            />
                        </li>)
                    )}
            </div>
        </>
    )
}

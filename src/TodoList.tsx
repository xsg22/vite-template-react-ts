import * as React from 'react';
import {useCallback} from "react";
import TodoListItem from './TodoListItem';
import TodoAdd from "./TodoAdd";
import './TodoList.css';



export default function TodoList() {
    const [todos, setTodos] = React.useState([])

    const addTask = (text) => {
        const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        console.log('list add after', [...todos, {id: nextId, text: text, isCompleted: false}])
        setTodos([...todos, {id: nextId, text: text, isCompleted: false}]);
    }

    const deleteTask = id => {
        console.log('delete', id)
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handlerTaskUpdate = (task) => {
        console.log('list change', task)
        console.log('list change after', todos, todos.map(todo => todo.id === task.id ? task : todo))
        setTodos(todos.map(todo => todo.id === task.id ? task : todo))
    }

    return (
        <>
            <TodoAdd addTask={addTask} />
            <div>
                <p>未完成列表</p>
                {todos.filter(todo => !todo.isCompleted)
                    .map(todo => (<li className="taskUncompletedList" key={todo.id}>
                            <TodoListItem
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
                            <TodoListItem
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
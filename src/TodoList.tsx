import * as React from 'react';
import {useCallback} from "react";
import TodoListItem from './TodoListItem';



export default function TodoList() {

    const [todos, setTodos] = React.useState([])

    const addTodo = useCallback(() => {
        const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        setTodos([...todos, {id: nextId, text: '', isCompleted: false}]);
    }, [todos])

    const deleteTodo = useCallback(id => {
        console.log('delete', id)
        setTodos(todos.filter(todo => todo.id !== id))
    }, [todos])

    const handleItemValueChange = useCallback((id, value) => {
        console.log('list change', id, value)
        setTodos(todos.map(todo => todo.id === id ? {...todo, text: value} : todo))
    }, [todos])

    return (
        <>
            <button onClick={addTodo}>Add</button>
            {todos.map(todo => <TodoListItem
                    key={todo.id}
                    itemId={todo.id}
                    initValue={todo.text}
                    onDelete={deleteTodo}
                    onChange={handleItemValueChange}
                />
            )}

            {todos.map(todo => <div key={todo.id}>{todo.text}</div>)}
        </>
    )
}
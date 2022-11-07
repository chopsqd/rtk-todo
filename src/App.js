import React, {useEffect, useState} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, fetchTodos} from "./redux/todoSlice";

function App() {
    const [text, setText] = useState('')
    const {status, error} = useSelector(state => state.todoList)
    const dispatch = useDispatch()

    const handleAction  = () => {
        if(text.trim().length) {
            dispatch(addNewTodo(text))
            setText('')
        }
    }

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <div className="App">
            <InputField
                value={text}
                updateText={setText}
                handleAction={handleAction}
            />

            { status === 'loading' && <h2>Loading...</h2>}
            { error && <h2>An error occurred: {error}</h2>}

            <TodoList />
        </div>
    );
}

export default App;
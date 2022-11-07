import React, {useState} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addToto = () => {
        if(text.trim().length) {
          setTodos([
              ...todos,
            {
              id: new Date().toISOString(),
              text,
              completed: false
            }
          ])
          setText('')
        }
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const toggleTodoComplete = (todoId) => {
        setTodos(
            todos.map(todo => {
                if(todo.id !== todoId) return todo

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        )
    }

    return (
        <div className="App">
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addToto}
            />
            <TodoList
                todos={todos}
                toggleTodoComplete={toggleTodoComplete}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
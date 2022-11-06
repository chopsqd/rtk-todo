import React, {useState} from "react";
import './App.css';

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

    return (
        <div className="App">
            <label>
                <input
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
                <button onClick={addToto}>Add Todo</button>
            </label>

          <ul>
            {todos.map(todo => 
                <li key={todo.id}>
                  <input type="checkbox"/>
                  <span>{todo.text}</span>
                  <span className={"delete"}>&times;</span>
                </li>
            )}
          </ul>
        </div>
    );
}

export default App;
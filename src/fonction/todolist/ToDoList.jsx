import React, { useState } from 'react';
import Button from "../../components/button/Button";
import "./todolist.css"

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Ajouter une tâche à la liste
    const addTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    // Supprimer une tâche de la liste
    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <div className="todolist">
                <div className="inputAndButtonTodolist">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ajouter une tâche"
                        className="inputTodolist"
                    />
                    <Button
                        onClick={addTask}
                        title="Add"
                        classButton="todolistAjouter"
                    />
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className="liTodolist">
                            {task}
                            <Button
                                title="Delete"
                                onClick={() => deleteTask(index)}
                                classButton="todolistSupprimer"
                            />

                        </li>
                        
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;

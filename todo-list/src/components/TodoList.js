import { useState, useEffect } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    } , []);

    useEffect(() => {
        tasks.length 
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.removeItem('tasks');
    }, [tasks]);

    const addTask = () => {
        if (newTasks) {
            setTasks([...tasks, newTasks]);
            setNewTasks('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a task..."
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>
                        {task} <button onClick={() => deleteTask(i)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

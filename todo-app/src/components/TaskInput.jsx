import React, { useState } from 'react';

//Inputs new tasks and adds them to the list
const TaskInput = ({ onAddTask }) => {
    const [task, setTask] = useState('');
    
    // Handles input change
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };
    // Handles adding task
    const handleAddTask = () => {
        if (task) {
            onAddTask(task);
            setTask(''); 
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask} disabled={!task}>Add Task</button>
        </div>
    );
};

export default TaskInput;

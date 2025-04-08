import React from 'react';

const TaskItem = ({ task, toggleStatus, removeTask }) => {
   
    // Render the task item with its status and actions
    return (
        <div className="task-item">
            <span
                onClick={() => toggleStatus(task.id)} // Toggle the task's completion status
                style={{
                    textDecoration: task.isDone ? 'line-through' : 'none', // Strikethrough if task is done
                    cursor: 'pointer', // Indicate clickable area
                }}
            >
                {task.text} {/* Display task text */}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: '10px' }}>
                Delete {/* Button to delete task */}
            </button>
        </div>
    );
};

export default TaskItem;

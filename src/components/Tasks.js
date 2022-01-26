import React from 'react'
import Task from './Task'

/* Props that will be used in the Task component are deconstructed in the function. We pass tasks which is linked to the tasks array items, and then we pass two props that effect the state of the component. */
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {/* The map function is used to iterate over the tasks array and then the values are passed to the Task component as attribute values.
            
            Note how some props are passed down from the App.js all the way down in order to trigger events and change attributes in the inner most components*/}
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

/* We need to export the component before we can import it to a parent component. */
export default Tasks

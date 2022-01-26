import React from 'react'
/* We import the desired icon(s) from the extensive react-icons library. To use react-icons we need to run 'npm install react-icons --save'. You can find the docs here https://react-icons.github.io/react-icons/ */
import { FaTimes } from 'react-icons/fa'

/* Props that will be used in the Task component are deconstructed in the function. We pass task which is linked to the tasks array items, and then we pass two props that effect the state of the component. */
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            /* The class changes based on the state of the reminder boolean value using the ternary operator. The onDoubleClick event toggles the state of the reminder in the App.js*/
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <ul>
                <li>
                    <h3>
                        {task.text}{' '}
                        {/* The x icon becomes the delete button with the onClick event which triggers the onDelete function. */}
                        <FaTimes
                            style={{
                                color: 'red',
                                cursor: 'pointer',
                            }}
                            onClick={() => onDelete(task.id)}
                        />
                    </h3>
                    <p>{task.day}</p>
                </li>
            </ul>
        </div>
    )
}

/* We need to export the component before we can import it to a parent component. */
export default Task

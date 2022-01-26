/* This app was built with great assistance from a tutorial by Traversy Media on YouTube. You can find the tutorial at https://youtu.be/w7ejDZ8SWv8 */

/* This is a stateful component and we will use state to change the UI render. */
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css'

function App() {
    /* We set the states in const variables */
    const [toggleTaskForm, setToggleTaskForm] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Reminder',
            day: 'Date',
            reminder: true,
        },
    ])

    // Add Task function will be used to add tasks. Because we use a map function, each task needs a random id that can be assigned as a key value in the map function.
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        /* The new task is added at the end of the task array. */
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // Delete Task deletes the selected task. The filter method is used to do this by filtering all tasks into the new array which DO NOT have a matching id.
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder sets or removes the reminder state to the selected task.
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        )
    }

    return (
        /* This is the UI render of the App and brings together all the components and events.
    This is where the events are triggered and then passed down as props to the various components it is linked to. */
        <div className="container">
            <Header
                /* We set this attribute equal to the function and then it will be picked up as a prop in the component and then linked to the onClick event. */
                onAdd={() => setToggleTaskForm(!toggleTaskForm)}
                toggleAddBtn={toggleTaskForm}
            />
            {/* Here the toggleTaskForm state is directly linked to the AddTask button component using the shortform ternary statement. Note how the onAdd attribute is directly linked to the addTask function.*/}
            {toggleTaskForm && <AddTask onAdd={addTask} />}
            {/* We use a ternary operator to check the length of the tasks array and if it is more than zero (not empty) it will return the task list, else it prompst the user that the to-do list is empty. */}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'Your list is empty.'
            )}
        </div>
    )
}

/* The App component is exported to be used in the index.js */
export default App

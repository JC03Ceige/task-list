import React from 'react'
/* We need to import the useState from the react library to apply it to our state. */
import { useState } from 'react'

/* Note how we pass the onAdd property to the AddTask component then pass the states of the task objects to the onAdd method. */
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    /* This function will add new data to the array. We call preventDefault on the event(e) to prevent the default onSubmit behaviour from running but instead run specified instructions */
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('You have not entered anything to add.')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        /* We pass the onSubmit attribute directly in the form allowing us to submit all data simultaneously. */

        /* The three inputs each have an onChange event that effects the specified state. */
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>To-Do</label>
                {/* This input takes a string value. */}
                <input
                    type="text"
                    placeholder="Add To-Do Item"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                {/* This input takes a date value. */}
                <input
                    type="text"
                    placeholder="Enter Date & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                {/* This input sets the reminder boolean value. */}
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            {/* This input acts as the button which submits the form. */}
            <input
                type="submit"
                value="Add To List"
                className="btn btn-block"
            />
        </form>
    )
}

export default AddTask

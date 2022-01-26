import React from 'react'
/* Using PropsTypes let us ensure that the right prop is passed to the component. It is form of control to prevent unnecesary bugs. */
import PropTypes from 'prop-types'
/* We import the button component. */
import { Button } from './Button'

/* Props that will be used in the header are deconstructed in the function. We set a default value for the title and then we pass two props that effect the state of the component. */
const Header = ({ title, onAdd, toggleAddBtn }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* Now we can take the atributes we passed as props in the button and link them to the  
      Ternary operator is used to change the attributes based on the state. */}
            <Button
                color={toggleAddBtn ? '#FF0044' : '#22EEBB'}
                text={toggleAddBtn ? 'Done' : `New Item`}
                onClick={onAdd}
            />
        </header>
    )
}

/* This set the default value for the title. */
Header.defaultProps = {
    title: 'To-Do List',
}

/* This sets the required proptype. */
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/* We need to export the component before we can import it to a parent component. */
export default Header

import React from 'react'
/* Using PropsTypes let us ensure that the right prop is passed to the component. It is form of control to prevent unnecesary bugs. */
import PropTypes from 'prop-types'

/* We create this generic component that we will use within other components. For this reason we pass props that can be manipulated in other components.

Note that we export this component directly,*/
export const Button = ({ color, text, onClick }) => {
    return (
        /* Within the button itself we set default values for the props we passed. */
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className="btn"
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

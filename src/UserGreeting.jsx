import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting(props) {
<></>
    const isLoggedIn = <h2 className="welcome-msg">Welcome back, {props.username}!</h2>
    const isNotLoggedIn = <h2 className="welcome-msg">Please log in.</h2>

return (props.isLoggedIn ? isLoggedIn : isNotLoggedIn)
}


UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting
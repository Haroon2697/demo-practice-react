import React from 'react'
import PropTypes from 'prop-types'

function Students(props) {
  return (

    <>
        <div className="student">
        <p> Name: {props.name}</p>
        <p> Age: {props.age}</p>
        <p> Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
   <hr />
    </>

  )
}


Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Students.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
}


export default Students

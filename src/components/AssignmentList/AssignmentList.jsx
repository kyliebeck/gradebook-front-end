import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react'


const AssignmentList = (props) => {
    const { user } = useContext(UserContext)
    const [formData, setFormData] = useState(
        props.assignments.reduce((formDataObject, assignment) => {
            // make new key/val pair in formdata object
            formDataObject[assignment._id] = assignment.pointsReceived
            return formDataObject
        }, {}))


    const handleSubmit = (evt) => {
        evt.preventDefault();

        props.handleUpdateAssignment(formData[assignment._id], { pointsReceived: assignment.pointsReceived })
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }


    return (

        <main>
            <h1>My Assignments</h1>

            <Link className='newAssignmentLink' to='/assignments/new'>New Assignment</Link>

            {!props.assignments.length ? (
                <h2>No Assignments Added Yet!</h2>
            ) : (
                <ul>
                    {props.assignments.map((assignment) => (

                        <li id='assignmentContainer'
                            key={assignment._id} className="assignmentList"
                            style={{ cursor: 'pointer', color: "#646CFF" }}>
                            <Link
                                className='assignmentListTitle' to={`/assignments/${assignment._id}`}>{assignment.assignmentType} {assignment.title}: {assignment.student.firstName} {assignment.student.lastName} </Link>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='pointsReceived' className='scoreInput'>Score:
                                </label>
                                <input
                                    className='pointsReceivedInput'
                                    type='number'
                                    id={assignment._id}
                                    value={formData[assignment._id]}
                                    name={assignment._id}
                                    onChange={handleChange}
                                />/{assignment.maxPoints}
                                <button type='submit' className='saveBtn'>Save</button>
                            </form>

                        </li>

                    ))}

                </ul>
            )}

        </main>
    )

};


export default AssignmentList;
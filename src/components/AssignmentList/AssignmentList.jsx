import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router';
import * as assignmentService from '../../services/assignmentService';

const AssignmentList = (props) => {
    const { assignmentId } = useParams()
    const { user } = useContext(UserContext)

    const [inputValue, setInputValue] = useState('');

    const [formData, setFormData] = useState(
        props.assignments.reduce((formDataObject, assignment) => {
            // make new key/val pair in formdata object
            formDataObject[assignment._id] = assignment.pointsReceived
            return formDataObject
        }, {}))



    const handleSubmit = (evt) => {
        evt.preventDefault();
        // props.handleUpdateAssignment(assignmentId, formData)

        console.log("props.assignments", props.assignments)

    }

    const handleChange = (evt) => {

        setFormData({ ...formData, [evt.target.name]: evt.target.value });

        setInputValue(evt.target.value)

        console.log('evt.target.value', evt.target.value)
        console.log('evt.target.name', evt.target.name)
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

                        <li
                            key={assignment._id} className="assignmentContainer"
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

                                <button onClick={() => props.handleUpdateAssignment(assignmentId)} type='submit' className='saveBtn'>Save</button>
                            </form>

                        </li>

                    ))}

                </ul>
            )}

        </main>
    )

};


export default AssignmentList;
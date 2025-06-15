import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react'


const AssignmentList = (props) => {
    const { user } = useContext(UserContext)
    const [formData, setFormData] = useState(0)





    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("evt.target", evt.target.id)
        props.handleUpdateAssignment(formData)
        setFormData({ ...formData, [evt.target.name]: evt.target.value })

    }

    const handleChange = (evt) => {

        setFormData({ ...formData, [evt.target.name]: evt.target.value });


    }

    return (

        <main>
            <h1>My Assignments</h1>
            <li><Link to='/assignments/new'>New Assignment</Link></li>
            {!props.assignments.length ? (


                <h2>No Assignments Added Yet!</h2>
            ) : (

                <ul>
                    {props.assignments.map((assignment) => (
                        <li
                            key={assignment._id} className="assignment-name"
                            style={{ cursor: 'pointer', color: "#646CFF" }}>
                            <Link to={`/assignments/${assignment._id}`}>{assignment.title}: {assignment.student.firstName} {assignment.student.lastName} </Link>

                            <form onSubmit={() => handleSubmit()}>

                                <label htmlFor='score-input'>Score:</label>
                                <input
                                    type='text'
                                    id='pointsReceived'
                                    value={formData._id}
                                    name='pointsReceived'
                                    onChange={handleChange}
                                /> /{assignment.maxPoints}
                                <button type='submit'>Save</button>
                            </form>



                        </li>

                    ))}

                </ul>
            )}

        </main>
    )

};


export default AssignmentList;
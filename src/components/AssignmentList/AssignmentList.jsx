import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react'


const AssignmentList = (props) => {
    const { user } = useContext(UserContext)
    console.log("props.assignments", props.assignments)
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
                            <Link to={`/assignments/${assignment._id}`}>{assignment.title}</Link>
                        </li>

                    ))}

                </ul>
            )}

        </main>
    )
};






export default AssignmentList;
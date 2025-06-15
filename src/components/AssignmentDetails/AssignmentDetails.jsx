import AssignmentForm from '../AssignmentForm/AssignmentForm';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import * as assignmentService from '../../services/assignmentService';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router';

const AssignmentDetails = (props) => {
    const { assignmentId } = useParams();
    // access user object from usercontext
    const { user } = useContext(UserContext);




    const selectedAssignment = props.assignments.find(
        (assignment) => {

            return assignment._id === assignmentId
        }
    );



    return (
        <main>
            <h1>{selectedAssignment.title}</h1>





            <p>{selectedAssignment.maxPoints}</p>

            {selectedAssignment.teacher._id === user._id && (
                <>
                    <button onClick={() => props.handleDeleteAssignment(assignmentId)}>
                        Delete
                    </button>
                    <Link to='/assignments'>Back</Link>
                </>
            )}

        </main>
    )

}



export default AssignmentDetails;
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
        <div className='assignmentDetailContainer'>

            <div
                className='assignmentDetailTitle'><h1>{selectedAssignment.title} {selectedAssignment.subject} {selectedAssignment.assignmentType}</h1>
            </div>

            <div className='assignmentDetailForm'>
                <p>{selectedAssignment.maxPoints} points possible</p>
                <p>Standards:</p>
                <p>Resources:</p>
            </div>
            {selectedAssignment.teacher._id === user._id && (
                <>
                    <button className='submitBtn' onClick={() => props.handleDeleteAssignment(assignmentId)}>Delete
                    </button>
                    <Link to='/assignments' className='backLink'>Back</Link>
                </>
            )}
        </div>
    )
}



export default AssignmentDetails;
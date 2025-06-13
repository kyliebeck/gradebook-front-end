import AssignmentForm from '../AssignmentForm/AssignmentForm';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import * as assignmentService from '../../services/assignmentService';
import { UserContext } from '../../contexts/UserContext';

const AssignmentDetails = (props) => {
    const { assignmentId } = useParams();
    // access user object from usercontext
    const { user } = useContext(UserContext);
    const [assignment, setAssignment] = useState(null)
    const selectedAssignment = props.assignments.find(
        (assignment) => {

            return assignment._id === assignmentId
        }
    );

    useEffect(() => {
        const fetchAssignment = async () => {
            const assignmentData = await assignmentService.show(assignmentId);
            setAssignment(assignmentData);
        };
        fetchAssignment();
    }, [assignmentId]);

    return (
        <main>
            <h1>{selectedAssignment.title}</h1>

            {assignment.teacher._id === user._id && (
                <>
                    {/* Modify the button */}
                    <button onClick={() => props.handleDeleteAssignment(assignmentId)}>
                        Delete
                    </button>
                </>
            )}

        </main>
    )

}



export default AssignmentDetails;
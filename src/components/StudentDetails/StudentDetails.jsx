import { useParams } from "react-router-dom";
import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router';



const StudentDetails = (props) => {

    const { studentId } = useParams();
    const { user } = useContext(UserContext);

    const selectedStudent = props.students.find(
        (student) => {

            return student._id === studentId

        }

    );
    console.log('props', props)





    return (
        <>
            <Link className='backLink' to={'/students'}>Back</Link>

            <h1>{selectedStudent.firstName} {selectedStudent.lastName}'s Details</h1>

            <>
                <p>Student Grade Year: {selectedStudent.grade}</p>
                <p>Student Goals: {selectedStudent.goals}</p>


                <Link className='userActionLink' to={`/students/${studentId}/edit`}>Update</Link>

            </>

        </>
    )
}

export default StudentDetails;
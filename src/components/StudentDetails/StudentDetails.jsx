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






    return (
        <>

            <h1>{selectedStudent.firstName} {selectedStudent.lastName}'s Details</h1>

            {selectedStudent.teacher._id === user._id && (

                <>
                    <p>Student Grade:</p>{selectedStudent.grade}
                    <p>Student Goals:</p>{selectedStudent.goals}
                    <p>Student Overall Score:</p>

                    <Link to={`/students/${studentId}/edit`}>Update</Link>
                </>
            )}
        </>
    )
}

export default StudentDetails;
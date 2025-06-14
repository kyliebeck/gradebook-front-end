import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as studentService from '../../services/studentService';


const StudentDetails = (props) => {

    const { studentId } = useParams();
    const { user } = useContext(UserContext);
    console.log("props", props)
    const selectedStudent = props.students.find(
        (student) => {
            console.log("student", student)
            return student._id === studentId

        }

    );
    console.log("selectedStudent", selectedStudent)





    return (
        <>

            <h1>{selectedStudent.firstName} {selectedStudent.lastName}'s Details</h1>

            {selectedStudent.teacher._id === user._id && (

                <>
                    <p>Student Grade:</p>{selectedStudent.grade}
                    <p>Student Goals:</p>{selectedStudent.goals}
                    <p>Student Overall Score:</p>




                    <button onClick={() => props.handleDeleteStudent(studentId)}>
                        Delete Student
                    </button>
                </>
            )}
        </>
    )
}

export default StudentDetails;
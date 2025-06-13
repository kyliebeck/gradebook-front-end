import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as studentService from '../../services/studentService';

const StudentDetails = (props) => {

    const { studentId } = useParams();
    const [student, setStudent] = useState(null)
    const selectedStudent = props.students.find(
        (student) => {

            return student._id === studentId
        }
    );


    useEffect(() => {
        const fetchStudent = async () => {
            const studentData = await studentService.show(studentId);
            setStudent(studentData);
        };
        fetchStudent();
    }, [studentId]);



    return (
        <>

            <h1>{selectedStudent.firstName} {selectedStudent.lastName}'s Details</h1>
            <div>
                <button onClick={() => props.handleDeleteStudent(selectedStudent._id)}>
                    Delete Student
                </button>
            </div>

        </>
    )
}

export default StudentDetails;
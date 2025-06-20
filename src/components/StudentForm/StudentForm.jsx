import * as studentService from '../../services/studentService';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router';

const StudentForm = (props) => {

    const { studentId } = useParams()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        goals: '',

    })
    console.log('formdata', formData)



    useEffect(() => {
        const fetchStudent = async () => {
            const studentData = await studentService.show(studentId);
            setFormData(studentData);
        };
        if (studentId) fetchStudent();
    }, [studentId]);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (studentId) {
            props.handleUpdateStudent(studentId, formData);
        } else {
            props.handleAddStudent(formData)
        }
    }


    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }

    return (
        <main>
            <h1>Update Student</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName"> First Name </label>
                <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="lastName"> Last Name </label>
                <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='grade'>Grade</label>
                <select
                    name='grade'
                    id='grade-input'
                    value={formData.grade}
                    onChange={handleChange}>
                    <option value='K'>Kindergarten</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                </select>

                <label htmlFor='goals'>Goals</label>
                <textarea
                    type='text'
                    name='goals-input'
                    id='goals-input'
                    value={formData.goals}
                    onChange={handleChange}
                />

                <button onClick={() => props.handleUpdateStudent(studentId)}>
                    Update Student
                </button>
            </form>

            <button onClick={() => props.handleDeleteStudent(studentId)}>
                Delete Student
            </button>

        </main>
    )

}





export default StudentForm;
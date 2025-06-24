import * as studentService from '../../services/studentService';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router';

const StudentForm = (props) => {

    const { studentId } = useParams()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        goals: '',

    })

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
        <div className='studentFormUpdateContainer'>
            <h1>Update Student</h1>
            <form className='studentFormUpdate' onSubmit={handleSubmit}>
                <div className='formPair'>
                    <label className='formLabels' htmlFor="firstName"> First Name: </label>
                    <input
                        className='studentInputName'
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formPair'>
                    <label className='formLabels' htmlFor="lastName"> Last Name: </label>
                    <input
                        className='studentInputName'
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formPair'>
                    <label className='formLabels' htmlFor='grade'>Grade: </label>
                    <select
                        className='studentInputGrade'
                        name='grade'
                        id='grade-input'
                        value={formData.grade}
                        onChange={handleChange}>
                        <option value=''>Select Grade</option>
                        <option value='K'>K</option>
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
                </div>
                <div className='goalFormPair'>
                    <label className='formLabels' htmlFor='goals'>Goals: </label>
                    <textarea
                        className='studentInputGoal'
                        type='text'
                        name='goals'
                        id='goals-input'
                        value={formData.goals}
                        onChange={handleChange}
                    />
                </div>

                <button className='userActionLinkSave' onClick={() => props.handleUpdateStudent(studentId)}>
                    Save Changes
                </button>


            </form>

            <button className='deleteBtn' onClick={() => props.handleDeleteStudent(studentId)}>
                Delete Student
            </button>

            <Link className='backLink' to={'/students'}>Cancel</Link>

        </div>
    )

}





export default StudentForm;
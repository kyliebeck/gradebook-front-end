import { useState } from 'react';
import { Link } from 'react-router'
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

const StudentList = (props) => {

    const [showForm, setShowForm] = useState(false);
    // formData state to control the form.
    const defaultFormData = {
        firstName: '',
        lastName: '',

    };

    const [formData, setFormData] = useState(defaultFormData)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddStudent(formData);
        setFormData(defaultFormData)

    };

    // handleChange function to update formData state.
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });

    };

    const handleToggleForm = async () => {
        setShowForm(!showForm)
    };

    return (
        <div className='classListContainer'>
            <h1 className='classListTitle'>My Class List</h1>
            <div>
                <button id='addStudentButton' onClick={handleToggleForm}>
                    {showForm ? <IoIosCloseCircleOutline className='showFormPic' /> : <MdOutlinePersonAddAlt1 className='showFormPic' />}
                </button>

                {showForm && (
                    <form className='addStudentForm' onSubmit={handleSubmit}>
                        <label htmlFor="firstName" ></label>
                        <input
                            id="firstName-input"
                            name="firstName"
                            placeholder='First Name'
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="lastName"></label>
                        <input
                            id="lastName-input"
                            name="lastName"
                            placeholder='Last Name'
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        <button id='addStudentButton' type="submit">Add Student</button>
                    </form>
                )}


                {/* if there are no students, render "there are no students"
                else, iterate through the students with map loop */}

                {!props.students.length ? (
                    <h2>No Students Added Yet!</h2>
                ) : (
                    <ul>
                        {props.students.map((student) => (
                            <li
                                key={student._id} className="studentList"
                                style={{ cursor: 'pointer', color: "#646CFF" }}>
                                <Link
                                    className='studentName' to={`/students/${student._id}`}>{student.firstName} {student.lastName}</Link>

                            </li>



                        ))}

                    </ul>
                )}
            </div>

        </div>
    );
}

export default StudentList;
import { useEffect, useContext, useState } from 'react';
import * as studentService from '../../services/studentService';



const StudentList = (props) => {


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

    return (
        <div>
            <h1>My Class List</h1>
            <div>
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

                    <button type="submit">Add New Student</button>
                </form>

                {/* if there are no students, render "there are no students"
                else, iterate through the students with for each loop */}

                {!props.students.length ? (
                    <h2>No Students Added Yet!</h2>
                ) : (
                    <ul>
                        {props.students.map((student) => (
                            <li
                                key={student._id}
                                style={{ cursor: 'pointer', color: "#646CFF" }}>
                                {student.firstName} {student.lastName}
                            </li>



                        ))}

                    </ul>
                )}
            </div>

        </div>
    );
}

export default StudentList;
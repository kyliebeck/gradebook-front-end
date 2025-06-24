import { useState } from 'react';
import { Link } from 'react-router';

const AssignmentForm = (props) => {


    const defaultFormData = {
        title: '',
        subject: '',
        assignmentType: '',
        maxPoints: '',
    };


    const [formData, setFormData] = useState({ defaultFormData })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddAssignment(formData)
    }


    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }


    return (
        <div className='newFormContainer'>

            <h1 className='assignmentFormTitle'>New Assignment</h1>

            <form className='assignmentForm' onSubmit={handleSubmit}>
                <ul>
                    <li><label htmlFor='title-input'>Assignment Title: </label>
                        <input
                            className='assignment-input'
                            required
                            type='text'
                            name='title'
                            id='title-input'
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </li>
                    <div className='formSection'>
                        <li>
                            <label htmlFor='subject-input'>Subject: </label>
                            <select
                                className='assignment-input-select'
                                name='subject'
                                id='subject-input'
                                value={formData.subject}
                                onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="Math">Math</option>
                                <option value="Science">Science</option>
                                <option value="History">History</option>
                                <option value="Writing">Writing</option>
                                <option value="Reading">Reading</option>
                                <option value="Arts">Arts</option>
                                <option value="Social-Emotional">Social-Emotional</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor='assignmentType-input'>Assignment Type: </label>
                            <select
                                className='assignment-input-select'
                                name='assignmentType'
                                id='assignmentType-input'
                                value={formData.assignmentType}
                                onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="Homework">Homework</option>
                                <option value="Classwork">Classwork</option>
                                <option value="Quiz">Quiz</option>
                                <option value="Test">Test</option>
                                <option value="Extra-Credit">Extra-Credit</option>
                                <option value="Quiz">Project</option>
                            </select>
                        </li>
                    </div>
                    <li>
                        <label htmlFor='maxPoints-input'>Possible Points: </label>
                        <input
                            className='assignment-points-input'
                            required
                            type='number'
                            name='maxPoints'
                            id='maxPoints-input'
                            value={formData.maxPoints}
                            onChange={handleChange}
                        />
                    </li>
                </ul>
                <button className='submitBtn' type='submit'>SAVE</button>
            </form>
            <Link className='backLink' to={'/assignments'}>Cancel</Link>
        </div>

    )
}

export default AssignmentForm;
import { useState } from 'react';
import { useNavigate } from 'react-router';

const AssignmentForm = (props) => {
    const navigate = useNavigate();

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
        setFormData(defaultFormData)


        console.log('formData', formData);
    }


    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }


    return (
        <>
            <h1>New Assignment</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor='title-input'>Assignment Title</label>
                <input
                    required
                    type='text'
                    name='title'
                    id='title-input'
                    value={formData.title}
                    onChange={handleChange}

                />
                <label htmlFor='subject-input'>Subject:</label>
                <select
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

                <label htmlFor='assignmentType-input'>Assignment Type:</label>
                <select
                    name='assignmentType'
                    id='assignmentType-input'
                    value={formData.assignmentType}
                    onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="Homework">Homework</option>
                    <option value="Classwork">Classwork</option>
                    <option value="Quiz">Quiz</option>
                    <option value="Text">Test</option>
                    <option value="Extra-Credit">Extra-Credit</option>
                    <option value="Quiz">Project</option>
                </select>
                <label htmlFor='maxPoints-input'>Possible Points</label>
                <input
                    required
                    type='text'
                    name='maxPoints'
                    id='maxPoints-input'
                    value={formData.maxPoints}
                    onChange={handleChange}
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </>

    )
}

export default AssignmentForm;
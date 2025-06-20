import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import './SignInForm.css'

import { signIn } from '../../services/authService';

import { UserContext } from '../../contexts/UserContext';

const SignInForm = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (evt) => {
        setMessage('');
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {

            const signedInUser = await signIn(formData);

            setUser(signedInUser);
            navigate('/');
        } catch (err) {
            setMessage(err.message);
        }
    };

    return (
        <main className='authForm'>
            <div className='welcome'>Welcome to Gradebook</div>
            <div id='authTitle'><h1>Sign In</h1></div>
            <form className='signInForm' onSubmit={handleSubmit}>
                <div className='authInput'>
                    <label htmlFor='email' id='authLabels'>Username:</label>
                    <input
                        type='text'
                        id='username'
                        value={formData.username}
                        name='username'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='authInput'>
                    <label htmlFor='password' id='authLabels'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        value={formData.password}
                        name='password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='buttonContainer'>
                    <button className='authButtons'>Sign In</button>
                    <button className='authButtons' onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    );
};

export default SignInForm;
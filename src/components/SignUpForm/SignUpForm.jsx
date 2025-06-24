
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
// Import the signUp() function from the authService
import { signUp } from '../../services/authService';
// Import the UserContext object
import { UserContext } from '../../contexts/UserContext';
import './SignUpForm.css'

const SignUpForm = () => {
    const navigate = useNavigate();
    // Pass the UserContext object to the useContext hook to access:
    // - The user state (which we're not using here).
    // - The setUser function to update the user state (which we are using).
    //
    // Destructure the object returned by the useContext hook for easy access
    // to the data we added to the context with familiar names.
    const { setUser } = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        nickname: '',
        username: '',
        password: '',
        passwordConf: '',
    });

    const { nickname, username, password, passwordConf } = formData;

    const handleChange = (evt) => {
        setMessage('');
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const newUser = await signUp(formData);
            // Call the setUser function to update the user state, just like normal.
            setUser(newUser);
            // Take the user to the (non-existent) home page after they sign up.
            // We'll get to this shortly!
            navigate('/');
        } catch (err) {
            setMessage(err.message);
        }
    };

    const isFormInvalid = () => {
        return !(username && password && password === passwordConf);
    };

    return (
        <main className='authForm'>
            <div className='welcome'>Welcome to Gradebook</div>
            <div id='authTitle'><h1>Sign Up</h1></div>
            <form className='signUpForm' onSubmit={handleSubmit}>
                <div className='authInput'>
                    <label htmlFor='nickname'>Name *</label>

                    <input
                        type='text'
                        id='nickname'
                        value={nickname}
                        name='nickname'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='authInput'>
                    <label htmlFor='username'>Username *</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        name='username'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='authInput'>
                    <label htmlFor='password'>Password *</label>
                    <div><small>Required at least 6 characters</small></div>
                    <input
                        type='password'
                        minLength='6'
                        id='password'
                        value={password}
                        name='password'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='authInput'>
                    <label htmlFor='confirm'>Confirm Password *</label>
                    <input
                        type='password'
                        id='confirm'
                        value={passwordConf}
                        name='passwordConf'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='buttonContainer'>
                    <button className='authButtons' disabled={isFormInvalid()}>Sign Up</button>
                    <button className='authButtons' onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    );
};

export default SignUpForm;
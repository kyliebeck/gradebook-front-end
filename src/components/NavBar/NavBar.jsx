// Import the useContext hook
import { useContext } from 'react';
import { Link } from 'react-router';

// Import the UserContext object
import { UserContext } from '../../contexts/UserContext';
import './NavBar.css';
import Logo from '../../assets/Logo.png'

<link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet"></link>

const NavBar = () => {

    const { user, setUser } = useContext(UserContext);
    // Add the handleSignOut function
    const handleSignOut = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');
        // Clear the user state
        setUser(null);
    };

    return (
        <nav className='container'>
            {user ? (
                <div className='navBarAuth'>
                    {/* <div className='welcomeUser'>Welcome, {user.username}</div> */}

                    <img id='appLogoPic' src={Logo} alt="gradebook logo"></img>

                    <div className='navs'><Link to='/' id='navLinks'>Home</Link>
                    </div>

                    <div className='navs'><Link to='/students' id='navLinks'>My Class List</Link></div>

                    <div className='navs'><Link to='/assignments' id='navLinks'>My Assignments</Link></div>

                    <div className='navBarRight'>
                        <Link to='/' onClick={handleSignOut} id='authLink'>Sign Out</Link>
                    </div>
                </div>
            ) : (
                <div className='navBarAuth'>

                    <div className='navBarLeft'>
                        <Link to='/' id='homeLink'>Home</Link>
                    </div>

                    <div className='navBarRight'>
                        <Link to="/sign-in" id='authLink'>Sign In</Link>

                        <Link to="/sign-up" id='authLink'>Register</Link>
                    </div>

                </div>
            )}
        </nav>
    );
};

export default NavBar;
// Import the useContext hook
import { useContext } from 'react';
import { Link } from 'react-router';

// Import the UserContext object
import { UserContext } from '../../contexts/UserContext';
import './NavBar.css';
import Logo from '../../assets/Logo.png'
import { GiHamburgerMenu } from "react-icons/gi";



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

                    <div className='leftNav'>
                        <GiHamburgerMenu className='hamburgerMenu' />
                    </div>
                    <div className='logoContainer'>
                        <img id='appLogoPic' src={Logo} alt="gradebook logo"></img>

                        <div className='navBarCenter'><Link to='/' id='navLinks'>Gradebook</Link>
                        </div>
                    </div>

                    <div className='navBarRight'>
                        <Link to='/' onClick={handleSignOut} id='authLink'>Sign Out</Link>
                    </div>
                </div>
            ) : (
                <div className='navBarAuth'>

                    <div className='logoContainer'>
                        <img id='appLogoPic' src={Logo} alt="gradebook logo"></img>

                        <div className='navBarCenter'>
                            <Link to='/' id='homeLink'>Gradebook</Link>
                        </div>
                    </div>

                    <div className='navBarRight'>
                        <Link to="/sign-in" id='authLink'>Sign In</Link>

                        <Link to="/sign-up" id='authLink'>Register</Link>
                    </div>

                </div>
            )
            }
        </nav >
    );
};

export default NavBar;
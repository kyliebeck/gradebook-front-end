import '../NavBar/NavBar.css';
import { Link } from 'react-router';

const HamburgerNav = () => {
    return (
        <div className='sideBar'>
            <ul>
                <li><Link to='/' className='sideNavLink'>Home</Link></li>
                <li><Link to='/students' className='sideNavLink'>My Class List</Link></li>
                <li><Link to='/assignments' className='sideNavLink'>My Assignments</Link></li>
                <li><Link to='/assignments/new' className='sideNavLink'>Create Assignment</Link></li>

            </ul>
        </div>
    )
}

export default HamburgerNav;
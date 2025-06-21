import '../NavBar/NavBar.css';
import { Link } from 'react-router';

const HamburgerNav = () => {
    return (
        <div className='sideBar'>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/students' >My Class List</Link></li>
                <li><Link to='/assignments' >My Assignments</Link></li>
                <li><Link to='/assignments/new' >Create Assignment</Link></li>

            </ul>
        </div>
    )
}

export default HamburgerNav;
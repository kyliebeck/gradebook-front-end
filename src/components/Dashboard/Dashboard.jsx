import { Link } from 'react-router'
import { useContext, useState } from 'react';
import * as userService from '../../services/userService';
import { UserContext } from '../../contexts/UserContext';
import '../../App.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Dashboard = () => {

    const { user } = useContext(UserContext);
    const [showSideNav, setShowSideNav] = useState(true)

    const toggleHamburger = async () => {
        setShowSideNav(!showSideNav)
    };

    return (
        <main>
            <div className='dashboardBody'>
                <h1>Welcome {user.username}!</h1>
                <ul>
                    <li><Link onClick={toggleHamburger} to='/students'>My Class List</Link></li>
                    <li><Link onClick={toggleHamburger} to='/assignments'>My Assignments</Link></li>
                    <li><Link onClick={toggleHamburger} to='/assignments/new'>New Assignment</Link></li>
                </ul>
            </div>
        </main>
    );
};

export default Dashboard;
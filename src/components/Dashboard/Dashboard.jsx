import { Link } from 'react-router'
import { useContext } from 'react';
import * as userService from '../../services/userService';
import { UserContext } from '../../contexts/UserContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);
    return (
        <main>
            <h1>Welcome {user.username}!</h1>
            <li><Link to='/students'>My Class List</Link></li>
            <li><Link to='/assignments'>My Assignments</Link></li>
            <li><Link to='/assignments/new'>New Assignment</Link></li>

        </main>
    );
};

export default Dashboard;
import { Link } from 'react-router'
const Dashboard = () => {
    return (
        <main>
            <h1>Hello, welcome to your GradeBook dashboard!</h1>
            <li><Link to='/students'>My Class List</Link></li>

        </main>
    );
};

export default Dashboard;
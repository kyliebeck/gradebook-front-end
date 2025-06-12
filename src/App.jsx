import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'; // Import React Router
import { useContext } from 'react';
import * as studentService from './services/studentService'
import NavBar from './components/NavBar/NavBar';
// Import the SignUpForm component
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import StudentList from './components/StudentList/StudentList';
import { UserContext } from './contexts/UserContext';




const App = () => {
  const [students, setStudents] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const fetchedStudents = await studentService.index();
        setStudents(fetchedStudents);
        console.log(fetchedStudents);
      } catch (err) {
        console.log(err)
      }
    }
    // if (student) {
    //     fetchStudents();
    // } else {
    fetchStudents();
    // }
  }, []);

  const handleAddStudent = async (formData) => {
    try {
      // Call studentService.create, assign return value to newStudent
      const newStudent = await studentService.create(formData);

      if (newStudent.err) {
        throw new Error(newStudent.err);
      }
      // Add the student object and the current students to a new array, and
      const newStudentList = [...students, newStudent]
      // set that array as the new students
      setStudents(newStudentList)

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/students' element={<StudentList students={students} handleAddStudent={handleAddStudent} />} />
      </Routes>
    </>
  );
};

export default App;

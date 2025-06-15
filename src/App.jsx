import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router';
import { Routes, Route } from 'react-router'; // Import React Router
import * as studentService from './services/studentService';
import * as assignmentService from './services/assignmentService';
import NavBar from './components/NavBar/NavBar';
// Import the SignUpForm component
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import StudentList from './components/StudentList/StudentList';
import StudentDetails from './components/StudentDetails/StudentDetails';
import AssignmentList from './components/AssignmentList/AssignmentList';
import AssignmentForm from './components/AssignmentForm/AssignmentForm';
import AssignmentDetails from './components/AssignmentDetails/AssignmentDetails';
import { UserContext } from './contexts/UserContext';




const App = () => {
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState([])
  const [students, setStudents] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const fetchedStudents = await studentService.index();
        setStudents(fetchedStudents);

      } catch (err) {
        console.log(err)
      }
    }
    if (user) {
      fetchStudents();
    } else {
      setStudents([]);
    }
  }, [user]
  )

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const fetchedAssignments = await assignmentService.index();
        console.log("fetched assignments", fetchedAssignments)
        setAssignments(fetchedAssignments);

      } catch (err) {
        console.log(err)
      }
    }
    if (user) {
      fetchAssignments();
    } else {
      setAssignments([]);
    }
  }, [user]
  )



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
      navigate('/students')

    } catch (err) {
      console.log(err);
    }
  };

  const handleAddAssignment = async (formData) => {
    try {
      // call assignment service and assign a return value to new assignment
      const newAssignment = await assignmentService.create(formData);

      if (newAssignment.err) {
        throw new Error(newAssignment.err);
      }
      // add the assignment object and the current list of assignments to a new array
      const newAssignmentList = [...assignments, newAssignment]
      // set the array as the new assignment array
      setAssignments(newAssignmentList, ...assignments)
      navigate('/assignments');

    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteStudent = async (studentId) => {
    try {
      // call the service to delete the student
      const deletedStudent = await studentService.deleteStudent(studentId);
      // handle errors if the service fails
      if (deletedStudent.err) {
        throw new Error(deletedStudent.err)
      }
      // update the list of students in the students state
      setStudents(students.filter((student) => student._id !== deletedStudent._id))

      navigate('/students')
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteAssignment = async (assignmentId) => {
    try {
      // call the service to delete the assignment
      const deletedAssignment = await assignmentService.deleteAssignment(assignmentId);
      // handle errors if the service fails
      if (deletedAssignment.err) {
        throw new Error(deletedAssignment.err)
      }
      // update the list of assignments in the assignments state
      setAssignments(assignments.filter((assignment) => assignment._id !== deletedAssignment._id))

      navigate('/assignments')
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdateAssignment = async (assignmentId, formData) => {
    try {

      const updatedAssignment = await assignmentService.update(assignmentId, formData);
      // handle errors
      if (updatedAssignment.err) {
        throw new Error(updatedAssignment.err)
      }
      const updatedAssignmentList = assignments.map((assignment) => {
        assignment._id !== updatedAssignment._id ? assignment : updatedAssignment
      })
      setAssignments(updatedAssignmentList);

    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard user={user} /> : <Landing />} />
        {user ? (
          <>
            {/* protected routes */}

            <Route path='/students' element={<StudentList
              students={students}
              handleAddStudent={handleAddStudent} />} />
            <Route path='/students/:studentId' element={<StudentDetails
              students={students}
              handleDeleteStudent={handleDeleteStudent} />}
            />
            <Route path='/assignments' element={<AssignmentList
              assignments={assignments}
              handleUpdateAssignment={handleUpdateAssignment} />} />
            <Route path='/assignments/new' element={<AssignmentForm handleAddAssignment={handleAddAssignment} />} />
            <Route path='/assignments/:assignmentId' element={<AssignmentDetails
              assignments={assignments}
              handleDeleteAssignment={handleDeleteAssignment} />}
            />
          </>
        ) : (
          <>
            {/* Non-user Routes */}
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;

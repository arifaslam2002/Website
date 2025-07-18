import { useEffect, useState } from 'react';
import StudentTable from './studentTable';
import '../Styles/admin.css';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/registrations');
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
      console.log(err);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/registrations/${id}`, {
        method: 'DELETE',
      });
      setStudents(students.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="admin-dashboard-container">
      <h2>Registered Students</h2>
      <StudentTable students={students} onDelete={deleteStudent} />
    </div>
  );
};

export default AdminDashboard;

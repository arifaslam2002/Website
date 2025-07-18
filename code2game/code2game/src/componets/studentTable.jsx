import '../Styles/admin.css';

const StudentTable = ({ students, onDelete }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student) => (
            <tr key={student._id}>
              <td>{student.FullName}</td>
              <td>{student.Email}</td>
              <td>{student.Course}</td>
              <td>
                <button onClick={() => onDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No students found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;

import StudentItem from "./StudentItem.jsx";

function StudentList({ students, deleteStudent, setEditingStudent }) {
  return (
    <div>
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
          setEditingStudent={setEditingStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;

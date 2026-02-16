function StudentItem({ student, deleteStudent, setEditingStudent }) {
  return (
    <div className="student">
      <span>{student.name}</span>
      <div>
        <button onClick={() => setEditingStudent(student)}>
          Edit
        </button>
        <button onClick={() => deleteStudent(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentItem;

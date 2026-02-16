import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm.jsx";
import StudentList from "./components/StudentList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Loader from "./components/Loader.jsx";
import EmptyState from "./components/EmptyState.jsx";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("students"));
    if (stored) {
      setStudents(stored);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function addOrUpdateStudent(name) {
    if (editingStudent) {
      setStudents(
        students.map((s) =>
          s.id === editingStudent.id ? { ...s, name } : s
        )
      );
      setEditingStudent(null);
    } else {
      setStudents([...students, { id: Date.now(), name }]);
    }
  }

  function deleteStudent(id) {
    setStudents(students.filter((s) => s.id !== id));
  }

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm
        addOrUpdateStudent={addOrUpdateStudent}
        editingStudent={editingStudent}
      />

      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <StudentList
          students={filtered}
          deleteStudent={deleteStudent}
          setEditingStudent={setEditingStudent}
        />
      )}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import API from "./api/axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // READ
  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      setLoading(true);
      const res = await API.get("/users");
      setStudents(res.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }

  // CREATE
  async function addStudent() {
    if (!name || !email) {
      alert("All fields required");
      return;
    }

    try {
      const res = await API.post("/users", { name, email });
      setStudents([...students, res.data]);
      setName("");
      setEmail("");
    } catch (err) {
      alert("Error adding student");
    }
  }

  // UPDATE
  async function updateStudent(id) {
    try {
      const res = await API.put(`/users/${id}`, {
        name: "Updated Name",
        email: "updated@email.com"
      });

      const updated = students.map((s) =>
        s.id === id ? res.data : s
      );

      setStudents(updated);
    } catch (err) {
      alert("Error updating");
    }
  }

  // DELETE
  async function deleteStudent(id) {
    try {
      await API.delete(`/users/${id}`);

      const filtered = students.filter(
        (s) => s.id !== id
      );

      setStudents(filtered);
    } catch (err) {
      alert("Error deleting");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management</h1>

      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>

      <hr />

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.email}</p>

          <button onClick={() => updateStudent(student.id)}>
            Update
          </button>

          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;

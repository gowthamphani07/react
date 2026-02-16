import { useState, useEffect } from "react";

function StudentForm({ addOrUpdateStudent, editingStudent }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
    }
  }, [editingStudent]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    addOrUpdateStudent(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button>
        {editingStudent ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;

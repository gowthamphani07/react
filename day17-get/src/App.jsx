import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong");
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

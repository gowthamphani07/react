import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}-{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

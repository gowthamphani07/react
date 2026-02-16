import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="center">Loading...</h2>;
  if (error) return <h2 className="center error">{error}</h2>;

  return (
    <div className="container">
      <h1 className="title">User Dashboard</h1>

      <div className="grid">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


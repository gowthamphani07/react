import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);      // Store API data
  const [loading, setLoading] = useState(true); // Track loading
  const [error, setError] = useState(null);     // Track errors

useEffect(() => {
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (err) {
      if (err.response) {
        setError("Server error");
      } else if (err.request) {
        setError("Network error");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

  // 🔥 CONDITIONAL UI

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  if (users.length === 0) {
    return <h2>No users found.</h2>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

import React from "react";
import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (data.length === 0) return <h2>No users found</h2>;

  return (
    <div>
      {data.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Users;

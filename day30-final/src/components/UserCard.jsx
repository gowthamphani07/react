function UserCard({ name, email }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
      <button>View Profile</button>
    </div>
  );
}

export default UserCard;

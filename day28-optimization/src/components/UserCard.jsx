import React from "react";

const UserCard = React.memo(({ name, email }) => {
  console.log("Rendering:", name);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px"
      }}
    >
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
});

export default UserCard;

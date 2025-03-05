import React from "react";

const UserDetails = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h2>User Profile-{id}</h2>
    </div>
  );
};

export default UserDetails;

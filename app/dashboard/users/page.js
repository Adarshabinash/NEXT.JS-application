import Link from "next/link";

const Users = () => {
  return (
    <div>
      <h2>User Details</h2>
      <div>
        <ul>
          <li>
            <Link rel="stylesheet" href="users/1">
              User 1
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="users/2">
              User 2
            </Link>
          </li>{" "}
          <li>
            <Link rel="stylesheet" href="users/3">
              User 3
            </Link>
          </li>{" "}
          <li>
            <Link rel="stylesheet" href="users/4">
              User 4
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Users;

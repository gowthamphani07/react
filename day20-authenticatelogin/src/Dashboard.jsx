import { useContext } from "react";
import AuthContext from "./AuthContext";

function Dashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;

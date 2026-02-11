import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    if (email === "admin@gmail.com" && password === "123456") {
      login();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div>
      <h2>Login Page</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

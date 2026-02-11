import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <h1>Password Toggle</h1>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />

      <br /><br />

      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default App;


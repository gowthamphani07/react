import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login / Logout UI</h1>

      {isLoggedIn ? (
        <>
          <h2>Welcome User 🎉</h2>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Please Login 🔐</h2>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;


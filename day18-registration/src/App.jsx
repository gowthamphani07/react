import { useState } from "react";

function App() {
  // 1️⃣ State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agree: false
  });

  // 2️⃣ State to store error message
  const [error, setError] = useState("");

  // 3️⃣ State to store success message
  const [success, setSuccess] = useState("");

  // 4️⃣ Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // 5️⃣ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (formData.name === "") {
      setError("Name is required");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.gender === "") {
      setError("Please select gender");
      return;
    }

    if (!formData.agree) {
      setError("You must agree to terms");
      return;
    }

    // If everything is correct
    setSuccess("Registration Successful 🎉");
    console.log(formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      agree: false
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <br /><br />

        <p>Gender:</p>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female

        <br /><br />

        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        /> I agree to terms

        <br /><br />

        <button type="submit">Register</button>
      </form>

      {/* Error & Success Messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default App;

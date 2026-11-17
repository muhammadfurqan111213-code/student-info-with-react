import React, { useState } from "react";
import "./App.css";

function App() {

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: ""
  });

  // Submitted student data
  const [student, setStudent] = useState(null);

  // Error message
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.course ||
      !formData.gender
    ) {
      setError("Please fill in all fields!");
      setStudent(null);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address!");
      setStudent(null);
      return;
    }

    if (!/^\d{10,15}$/.test(formData.phone)) {
      setError("Phone must contain 10 to 15 digits!");
      setStudent(null);
      return;
    }

    setError("");
    setStudent({ ...formData });

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      gender: ""
    });
  };

  return (
    <div className="container">

      <div className="form-box">

        <h1>Student Registration</h1>
        <p>Fill in your details to register</p>

        <form onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Web Development">Web Development</option>
          </select>

          <label>Gender</label>

          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <button type="submit">Register Student</button>

        </form>

        {error && <p className="error">{error}</p>}

      </div>

      {/* Display Student Details */}

      {student && (
        <div className="student-details">

          <h2>Registration Successful!</h2>

          <p><b>Name:</b> {student.name}</p>
          <p><b>Email:</b> {student.email}</p>
          <p><b>Phone:</b> {student.phone}</p>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Gender:</b> {student.gender}</p>

        </div>
      )}

    </div>
  );
}

export default App;
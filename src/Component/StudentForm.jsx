
import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNo: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);

    setFormData({
      name: "",
      email: "",
      rollNo: "",
      course: ""
    });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label>Student Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter student name"
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
        required
      />

      <label>Roll Number</label>
      <input
        type="text"
        name="rollNo"
        value={formData.rollNo}
        onChange={handleChange}
        placeholder="Enter roll number"
        required
      />

      <label>Course</label>
      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
      >
        <option value="">Select Course</option>
        <option value="BCA">BCA</option>
        <option value="BBA">BBA</option>
        <option value="B.Com">B.Com</option>
        <option value="MCA">MCA</option>
      </select>

      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;

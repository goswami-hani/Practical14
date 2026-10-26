
import React from "react";
import "./StudentList.css";

function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        students.map((student, index) => (
          <div className="student-card" key={index}>
            <h3>{student.name}</h3>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Roll No:</strong> {student.rollNo}</p>
            <p><strong>Course:</strong> {student.course}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;



import React, { useState } from "react";
import StudentForm from "./Component/StudentForm";
import StudentList from "./Component/StudentList";
import "./App.css";


function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app">
      <h1>Student Registration Form</h1>
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;

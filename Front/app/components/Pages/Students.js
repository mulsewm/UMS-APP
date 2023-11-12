import React, { useEffect, useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from your API
    fetch('http://localhost:3002/students')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <h2>{student.name}</h2>
            <p>Grade: {student.grade}</p>
            <p>Courses: {student.courses.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
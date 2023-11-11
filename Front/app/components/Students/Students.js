import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentPhone, setNewStudentPhone] = useState('');

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3002/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/students', {
        name: newStudentName,
        contact_details: {
          email: newStudentEmail,
          phone: newStudentPhone,
        },
      });

      console.log('Student added:', response.data);
      // Fetch students again after adding a new student
      fetchStudents();
      // Clear the form fields
      setNewStudentName('');
      setNewStudentEmail('');
      setNewStudentPhone('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <h2>List of Students</h2>

      {/* Display existing students */}
      {students.map((student) => (
        <div key={student.student_id}>
          <h3>{student.name}</h3>
          <p>Contact Details: {JSON.parse(student.contact_details).email}</p>
          <p>Courses Enrolled:</p>
          <ul>
            {student.enrolled_courses.map((course) => (
              <li key={course.course_id}>{course.course_name}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Form for adding a new student */}
      <h2>Add a New Student</h2>
      <form onSubmit={handleAddStudent}>
        <label>
          Name:
          <input type="text" value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={newStudentEmail} onChange={(e) => setNewStudentEmail(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="text" value={newStudentPhone} onChange={(e) => setNewStudentPhone(e.target.value)} />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default Students;

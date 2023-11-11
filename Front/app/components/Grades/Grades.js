import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Grades = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get('http://localhost:3002/grades');
        setGrades(response.data);
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };
    fetchGrades();
  }, []);
  return (
    <div>
      <h2>List of Grades</h2>
      {grades.map((grade) => (
        <div key={grade.id}>
          <h3>{grade.name}</h3>
          <p>Grade Value: {grade.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Grades;
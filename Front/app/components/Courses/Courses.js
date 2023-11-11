import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getTotalCourses, getCourses } from './api';

const Courses = () => {
  const [totalCourses, setTotalCourses] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchTotalCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3002/courses/');
        setTotalCourses(response.data.totalCourses);
      } catch (error) {
        console.error('Error fetching total number of courses:', error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3002/courses/');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchTotalCourses();
    fetchCourses();
  }, []);

  return (
    <div>
    <h2>Total Number of Courses: {totalCourses}</h2>
    <h2>List of Courses</h2>
    {courses.map((course) => (
      <div key={course.course_id}>
        <h3>{course.name}</h3>
        <p>Course Code: {course.code}</p>
      </div>
    ))}
  </div>
);
};

export default Courses;
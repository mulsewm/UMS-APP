const pool = require("../config/database");
const pool = require("../database");

const getAllCourses = async () => {
  const query = "SELECT * FROM courses";
  const result = await pool.query(query);
  return result.rows;
};

const getCourseById = async (id) => {
  const query = "SELECT * FROM courses WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createCourse = async (course) => {
  const { title, course_code, description, credit_hours } = course;
  const query = "INSERT INTO courses (title, course_code, description, credit_hours) VALUES ($1, $2, $3, $4) RETURNING *";
  const result = await pool.query(query, [title, course_code, description, credit_hours]);
  return result.rows[0];
};

const updateCourse = async (id, course) => {
  const { title, course_code, description, credit_hours } = course;
  const query = "UPDATE courses SET title = $1, course_code = $2, description = $3, credit_hours = $4 WHERE id = $5 RETURNING *";
  const result = await pool.query(query, [title, course_code, description, credit_hours, id]);
  return result.rows[0];
};

const deleteCourse = async (id) => {
  const query = "DELETE FROM courses WHERE id = $1";
  await pool.query(query, [id]);
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
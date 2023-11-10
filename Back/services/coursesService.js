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
  const { name } = course;
  const query = "INSERT INTO courses (name) VALUES ($1) RETURNING *";
  const result = await pool.query(query, [name]);
  return result.rows[0];
};

const updateCourse = async (id, course) => {
  const { name } = course;
  const query = "UPDATE courses SET name = $1 WHERE id = $2 RETURNING *";
  const result = await pool.query(query, [name, id]);
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
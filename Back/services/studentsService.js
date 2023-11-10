const pool = require("../database");

const getAllStudents = async () => {
  const query = "SELECT * FROM students";
  const result = await pool.query(query);
  return result.rows;
};

const getStudentById = async (id) => {
  const query = "SELECT * FROM students WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createStudent = async (student) => {
  const { name } = student;
  const query = "INSERT INTO students (name) VALUES ($1) RETURNING *";
  const result = await pool.query(query, [name]);
  return result.rows[0];
};

const updateStudent = async (id, student) => {
  const { name } = student;
  const query = "UPDATE students SET name = $1 WHERE id = $2 RETURNING *";
  const result = await pool.query(query, [name, id]);
  return result.rows[0];
};

const deleteStudent = async (id) => {
  const query = "DELETE FROM students WHERE id = $1";
  await pool.query(query, [id]);
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
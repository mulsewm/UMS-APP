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
  const { name, contact_details } = student;
  const query = "INSERT INTO students (name, contact_details) VALUES ($1, $2) RETURNING *";
  const result = await pool.query(query, [name, contact_details]);
  return result.rows[0];
};

const updateStudent = async (id, student) => {
  const { name, contact_details } = student;
  const query = "UPDATE students SET name = $1, contact_details = $2 WHERE id = $3 RETURNING *";
  const result = await pool.query(query, [name, contact_details, id]);
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
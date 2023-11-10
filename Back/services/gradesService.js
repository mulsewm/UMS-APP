const pool = require("../config/database");

const getAllGrades = async () => {
  const query = "SELECT * FROM grades";
  const result = await pool.query(query);
  return result.rows;
};

const getGradeById = async (id) => {
  const query = "SELECT * FROM grades WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createGrade = async (grade) => {
  const { student_id, course_id, academic_period, letter_grade } = grade;
  const query = "INSERT INTO grades (student_id, course_id, academic_period, letter_grade) VALUES ($1, $2, $3, $4) RETURNING *";
  const result = await pool.query(query, [student_id, course_id, academic_period, letter_grade]);
  return result.rows[0];
};

const updateGrade = async (id, grade) => {
  const { student_id, course_id, academic_period, letter_grade } = grade;
  const query = "UPDATE grades SET student_id = $1, course_id = $2, academic_period = $3, letter_grade = $4 WHERE id = $5 RETURNING *";
  const result = await pool.query(query, [student_id, course_id, academic_period, letter_grade, id]);
  return result.rows[0];
};

const deleteGrade = async (id) => {
  const query = "DELETE FROM grades WHERE id = $1";
  await pool.query(query, [id]);
};

module.exports = {
  getAllGrades,
  getGradeById,
  createGrade,
  updateGrade,
  deleteGrade,
};
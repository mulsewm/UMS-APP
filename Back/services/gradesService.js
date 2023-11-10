const pool = require("../database");

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
  const { studentId, courseId, gradeValue } = grade;
  const query =
    "INSERT INTO grades (student_id, course_id, grade) VALUES ($1, $2, $3) RETURNING *";
  const result = await pool.query(query, [studentId, courseId, gradeValue]);
  return result.rows[0];
};

const updateGrade = async (id, grade) => {
  const { studentId, courseId, gradeValue } = grade;
  const query =
    "UPDATE grades SET student_id = $1, course_id = $2, grade = $3 WHERE id = $4 RETURNING *";
  const result = await pool.query(query, [studentId, courseId, gradeValue, id]);
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
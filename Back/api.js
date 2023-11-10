const cors = require("cors");

const express = require("express");
const pool = require("./config/database");

const router = express.Router();

// Get courses with pagination support
router.get("/courses", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const totalCountQuery = "SELECT COUNT(*) FROM courses";
    const coursesQuery = `
      SELECT * FROM courses
      ORDER BY id
      LIMIT $1 OFFSET $2
    `;

    const totalCountResult = await pool.query(totalCountQuery);
    const totalCount = parseInt(totalCountResult.rows[0].count);

    const coursesResult = await pool.query(coursesQuery, [limit, offset]);
    const courses = coursesResult.rows;

    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      totalCount,
      courses,
    });
  } catch (error) {
    console.error("Error retrieving courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get students with pagination support and their enrolled courses
router.get("/students", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const totalCountQuery = "SELECT COUNT(*) FROM students";
    const studentsQuery = `
      SELECT students.id, students.name, 
        ARRAY_AGG(courses.name) AS enrolled_courses
      FROM students
      LEFT JOIN grades ON students.id = grades.student_id
      LEFT JOIN courses ON grades.course_id = courses.id
      GROUP BY students.id
      ORDER BY students.id
      LIMIT $1 OFFSET $2
    `;

    const totalCountResult = await pool.query(totalCountQuery);
    const totalCount = parseInt(totalCountResult.rows[0].count);

    const studentsResult = await pool.query(studentsQuery, [limit, offset]);
    const students = studentsResult.rows;

    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      totalCount,
      students,
    });
  } catch (error) {
    console.error("Error retrieving students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
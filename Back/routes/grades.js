const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// Create a new grade
router.post("/", async (req, res) => {
  try {
    const { student_id, course_id, academic_period, letter_grade } = req.body;

    // Insert the new grade into the database
    const query = "INSERT INTO grades (student_id, course_id, academic_period, letter_grade) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [student_id, course_id, academic_period, letter_grade];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating grade:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

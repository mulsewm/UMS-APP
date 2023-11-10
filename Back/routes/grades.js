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
//Get all grades 
router.get("/", async (req, res) => {
    try {
      // Retrieve all grades from the database
      const query = "SELECT * FROM grades";
      const result = await pool.query(query);
  
      res.status(200).json(result.rows);
    } catch(error) {
      console.error("Error undefinedretrieving grades:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;

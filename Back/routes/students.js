const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// Create a new student
router.post("/", async (req, res) => {
  try {
    const { name, contact_details } = req.body;

    // Insert the new student into the database
    const query = "INSERT INTO students (name, contact_details) VALUES ($1, $2) RETURNING *";
    const values = [name, contact_details];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Get all students
router.get("/", async (req, res) => {
    try {
      // Retrieve all students from the database
      const query = "SELECT * FROM students";
      const result = await pool.query(query);
  
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error retrieving students:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  // Get a specific student by student_id
router.get("/:student_id", async (req, res) => {
    try {
      const studentId = req.params.student_id;
  
      // Retrieve the student from the database based on student_id
      const query = "SELECT * FROM students WHERE student_id = $1";
      const values = [studentId];
      const result = await pool.query(query, values);
  
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Student not found" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    } catch (error) {
      console.error("Error retrieving student:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
module.exports = router;

const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// Create a new course
router.post("/", async (req, res) => {
  try {
    const { title, course_code, description, credit_hours } = req.body;

    // Insert the new course into the database
    const query = "INSERT INTO courses (title, course_code, description, credit_hours) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [title, course_code, description, credit_hours];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Get all courses
router.get("/", async (req, res) => {
    try {
      // Retrieve all courses from the database
      const query = "SELECT * FROM courses";
      const result = await pool.query(query);
  
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Error retrieving courses:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;

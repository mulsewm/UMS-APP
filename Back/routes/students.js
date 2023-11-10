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

module.exports = router;

const studentsService = require("../services/studentsService");

const getAllStudents = async (req, res) => {
  try {
    const students = await studentsService.getAllStudents();
    res.json(students);
  } catch (error) {
    console.error("Error retrieving students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentsService.getStudentById(id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error("Error retrieving student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name } = req.body;
    const student = await studentsService.createStudent({ name });
    res.status(201).json(student);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const student = await studentsService.updateStudent(id, { name });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await studentsService.deleteStudent(id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
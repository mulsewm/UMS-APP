const gradesService = require("../services/gradesService");

const getAllGrades = async (req, res) => {
  try {
    const grades = await gradesService.getAllGrades();
    res.json(grades);
  } catch (error) {
    console.error("Error retrieving grades:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getGradeById = async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await gradesService.getGradeById(id);
    if (!grade) {
      return res.status(404).json({ error: "Grade not found" });
    }
    res.json(grade);
  } catch (error) {
    console.error("Error retrieving grade:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createGrade = async (req, res) => {
  try {
    const grade = req.body;
    const createdGrade = await gradesService.createGrade(grade);
    res.status(201).json(createdGrade);
  } catch (error) {
    console.error("Error creating grade:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const grade = req.body;
    const updatedGrade = await gradesService.updateGrade(id, grade);
    if (!updatedGrade) {
      return res.status(404).json({ error: "Grade not found" });
    }
    res.json(updatedGrade);
  } catch (error) {
    console.error("Error updating grade:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;
    await gradesService.deleteGrade(id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting grade:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllGrades,
  getGradeById,
  createGrade,
  updateGrade,
  deleteGrade,
};
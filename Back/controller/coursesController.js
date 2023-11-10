const coursesService = require("../services/coursesService");

const getAllCourses = async (req, res) => {
  try {
    const courses = await coursesService.getAllCourses();
    res.json(courses);
  } catch (error) {
    console.error("Error retrieving courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await coursesService.getCourseById(id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error("Error retrieving course:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
};
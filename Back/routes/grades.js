const express = require("express");
const gradesController = require("../controllers/gradesController");

const router = express.Router();

router.get("/", gradesController.getAllGrades);
router.get("/:id", gradesController.getGradeById);
router.post("/", gradesController.createGrade);
router.put("/:id", gradesController.updateGrade);
router.delete("/:id", gradesController.deleteGrade);

module.exports = router;
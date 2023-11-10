const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const coursesRouter = require("./routes/courses");
const gradesRouter = require("./routes/grades");
const studentsRouter = require("./routes/students");

// Create Routes
app.use("/courses", coursesRouter);
app.use("/grades", gradesRouter);
app.use("/students", studentsRouter);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
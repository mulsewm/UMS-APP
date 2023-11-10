const { Pool } = require("pg");

require("dotenv").config();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("Connected to PostgreSQL Database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const createTable = async (tableName, schema) => {
  try {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${schema})`;
    await pool.query(createTableQuery);
    console.log(`${tableName} Table created`);
  } catch (error) {
    console.error(`Error creating ${tableName} table:`, error);
  }
};

// Create the courses table
const coursesSchema = `
  course_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  course_code VARCHAR(10) NOT NULL,
  description VARCHAR(255) NOT NULL,
  credit_hours INTEGER NOT NULL
`;

// Create the students table
const studentsSchema = `
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact_details VARCHAR(255) NOT NULL
`;

const gradesSchema = `
  grade_id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(student_id),
  course_id INTEGER REFERENCES courses(course_id),
  academic_period VARCHAR(50) NOT NULL,
  letter_grade VARCHAR(2) NOT NULL
`;

const courseStudentsSchema = `
  course_id INTEGER REFERENCES courses(course_id),
  student_id INTEGER REFERENCES students(student_id),
  PRIMARY KEY (course_id, student_id)
`;

createTable("courses", coursesSchema);
createTable("students", studentsSchema);
createTable("grades", gradesSchema);
createTable("course_students", courseStudentsSchema);

module.exports = pool;
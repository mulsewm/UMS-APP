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
  console.log("Connected to PostgreSQL database");
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
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
`;

// Create the students table
const studentsSchema = `
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
`;

// Create the grades table with foreign key constraints
const gradesSchema = `
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  course_id INTEGER REFERENCES courses(id),
  grade INTEGER NOT NULL
`;

// Create Tables
createTable("courses", coursesSchema);
createTable("students", studentsSchema);
createTable("grades", gradesSchema);


module.exports = pool;
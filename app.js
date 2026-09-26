const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const logger = require("./middleware/logger")
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Student Management REST API',
    availableRoutes: {
      'GET /students': 'Retrieve all students',
      'GET /students/:id': 'Retrieve a student by ID',
      'POST /students': 'Create a new student',
      'PUT /students/:id': 'Update an existing student',
      'DELETE /students/:id': 'Delete a student'
    }
  });
});

// Routes
app.use('/students', studentRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Resource not found: ${req.method} ${req.originalUrl}`
  });
});

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

const express = require('express');
const router = express.Router();
const students = require('../data/students');

// GET /students
router.get('/', (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id
router.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.status(200).json(student);
});

module.exports = router;

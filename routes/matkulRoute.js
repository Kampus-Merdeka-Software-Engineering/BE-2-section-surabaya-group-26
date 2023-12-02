const matkulController = require('../controllers/matkulController');
const express = require('express');
const matkulRouter = express.Router();


// POST - CREATE Method
matkulRouter.post('/', matkulController.createMatkul);
// GET - READ Method
matkulRouter.get('/', matkulController.getMatkul);
// GET Matkul By ID
matkulRouter.get('/:matkulId', matkulController.getMatkulById);
// GET Matkul By Semester ID
matkulRouter.get('/semester/:semesterId', matkulController.getMatkulBySemesterId);
// PATCH - UPDATE Method
matkulRouter.patch('/:matkulId', matkulController.updatedMatkul);
// DELETE Method
matkulRouter.delete('/:matkulId', matkulController.deleteMatkul);


module.exports = matkulRouter;
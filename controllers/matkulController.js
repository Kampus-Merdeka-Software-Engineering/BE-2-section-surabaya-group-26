// const { status } = require('express/lib/response');
const matkulService = require('../services/matkulService');


// POST - CREATE Method
async function createMatkul(req, res) {
    const { kode, nama, sks, semester } = req.body;
    try {
        const matkul = await matkulService.createMatkul(kode, nama, sks, semester);
        res.status(201).json({
            message: "Success POST/CREATE Matkul",
            data: matkul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// GET - READ Method
async function getMatkul(req, res) {
    try {
        const matkul = await matkulService.getMatkul();
        res.status(200).json({
            message: "Success GET/READ Matkul",
            data: matkul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// GET Matkul By ID
async function getMatkulById(req, res) {
    const { matkulId } = req.params;
    try {
        const matkul = await matkulService.getMatkulById(matkulId);
        if (!matkul) {
            res.status(404).json({message: "Matkul tidak ada"});
        }
        res.status(200).json({
            message: "Success GET/READ Matkul",
            data: matkul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// GET Matkul By Semester ID
async function getMatkulBySemesterId(req, res) {
    const { semesterId } = req.params;
    try {
        const matkul = await matkulService.getMatkulBySemesterId(semesterId);
        if (!matkul) {
            res.status(404).json({message: "Matkul tidak ada"});
        }
        res.status(200).json({
            message: "Success GET/READ Matkul",
            data: matkul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// PATCH - UPDATE Method
async function updatedMatkul(req, res) {
    const { matkulId } = req.params;
    const { kode, nama, sks, semester } = req.body;
    try {
        const matkul = await matkulService.updateMatkul(matkulId, kode, nama, sks, semester);
        res.status(200).json({
            message: "Success PATCH/UPDATE Matkul",
            data: matkul
        }) 
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}


async function deleteMatkul(req, res) {
    const { matkulId } = req.params;
    try {
        await matkulService.deleteMatkul(matkulId);
        res.status(200).json({
            message: "Success DELETE Matkul"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}



module.exports = {
    createMatkul,
    getMatkul,
    getMatkulById,
    getMatkulBySemesterId,
    updatedMatkul,
    deleteMatkul
}
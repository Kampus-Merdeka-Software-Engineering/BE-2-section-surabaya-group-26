const { prisma } = require('../config/prisma');


// POST - CREATE Method
async function createMatkul(kode, nama, sks, semester) {
    try {
        const semesters = await prisma.semester.findFirst({
            where: {
                semester: semester,
            },
        });

        if (semesters) {
            const createdMatkul = await prisma.matkul.create({
                data: {
                    kode,
                    nama,
                    sks,
                    semester: {
                        connect: {
                            id: semesters.id,
                        },
                    },
                },
            });
            return createdMatkul;
        } else {
            throw new Error(`${semester} tidak ditemukan`)
        }
    } catch (error) {
        console.error("Error in createMatkul:", error);
        throw error;
    };
}


// GET - READ Method
async function getMatkul() {
    try {
        const matkul = await prisma.matkul.findMany({
            orderBy: [
                {
                    semester_id: 'asc'
                }
            ],
            include: {
                semester: {
                    select: {
                        semester: true,
                    }
                },
            },
        });
        return matkul;
    } catch (error) {
        console.log(error);
    };
}


// GET Matkul By ID
async function getMatkulById(matkulId) {
    try {
        const matkul = prisma.matkul.findUnique({
            where: {
                id: Number(matkulId)
            }
        });
        return matkul;
    } catch (error) {
        console.log(error);
    }
}


// GET Matkul By Semester Id
async function getMatkulBySemesterId(semesterId) {
    try {
        const matkul = await prisma.matkul.findMany({
            where: {
                semester_id: Number(semesterId),
            }
        })
        return matkul;
    } catch (error) {
        console.log(error);
    }
}


// PATCH - UPDATE Method
async function updateMatkul(matkulId, kode, nama, sks, semester) {
    try {
        const semesters = await prisma.semester.findFirst({
            where: {
                semester: semester,
            },
        });

        if (semesters) {
            const updatedMatkul = await prisma.matkul.update({
                where: {
                    id: Number(matkulId),
                },
                data: {
                    kode,
                    nama,
                    sks,
                    semester: {
                        connect: {
                            id: semesters.id,
                        },
                    },
                },
            });
            return updatedMatkul;
        } else {
            throw new Error(`${semester} tidak ditemukan`)
        }
    } catch (error) {
        console.error("Error in createMatkul:", error);
        throw error;
    };
}


// DELETE Method
async function deleteMatkul(matkulId) {
    try {
        const deletedMatkul = prisma.matkul.delete({
            where: {
                id: Number(matkulId)
            }
        });
        return deletedMatkul;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createMatkul,
    getMatkul,
    getMatkulById,
    getMatkulBySemesterId,
    updateMatkul,
    deleteMatkul
}
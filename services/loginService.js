const { prisma } = require('../config/prisma');
const bcrypt = require('bcrypt');


// Autentikasi Login
async function authentication(username, password) {
    try {
        const admin = await prisma.admin.findUnique({
            where: {
                username: username,
            }
        });
        if (admin) {
            if (password === admin.password) {
                return {success: true, admin};
            } else {
                return {success: false, message: `Password salah!`}
            }
        } else {
            return {success: false, message: `Akun tidak ditemukan`};
        }
    } catch (error) {
        console.log(error);
        return {success: false, message: `Terjadi kesalahan saat Autentikasi`}
    }
}


module.exports = {
    authentication
}
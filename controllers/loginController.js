const loginService = require('../services/loginService');


async function authentication(req, res) {
    const { username, password } = req.body;
    const result = await loginService.authentication(username, password);

    if (result.success) {
        res.status(200).json({
            message: 'Login success',
            user: result.admin
        });
    } else {
        res.status(401).json({
        message: result.message
        });
    }
}


module.exports = {
    authentication
}
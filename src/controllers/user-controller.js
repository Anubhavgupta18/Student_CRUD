const UserService = require('../services/user-service');

const userService = new UserService();

const signup = async (req, res) => {
    try {
        const user = await userService.create(req.body);
        res.status(201).json({
            user,
            message:'Signed up successfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Unable to sign up',
            error
        });
    }
}

const signin = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        res.status(200).json({
            token,
            message: 'Signed In successfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Unable to sign in',
            error
        })
    }
}

module.exports = {
    signup,
    signin
}
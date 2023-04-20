const User = require('../models/user');

class UserService{
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log('Somenthing went wrong in service layer');
            throw error;
        }
    }
    async signin(data) {
        try {
            const user = await User.findOne({ email: data.email, password: data.password });
            if (!user) {
                throw { error: 'User not found' };
            }
            const token = user.genJWT({ id: user._id });
            return token;
        } catch (error) {
            console.log('Somenthing went wrong in service layer');
            throw error;
        }
    }
}

module.exports = UserService;
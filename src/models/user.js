const mongoose = require('mongoose');
var JWT = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/serverConfig');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

userSchema.method('genJWT', (data) => {
    const token = JWT.sign({ id: data.id }, JWT_SECRET_KEY);
    return token;
})


const User = mongoose.model('User', userSchema);

module.exports = User;
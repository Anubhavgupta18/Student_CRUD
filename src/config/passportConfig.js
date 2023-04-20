const JWT = require('passport-jwt');
const Student = require('../models/student');
const { JWT_SECRET_KEY } = require('../config/serverConfig.js');

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : JWT_SECRET_KEY
}
const passportAuth = (passport) =>{
    passport.use(new JwtStrategy(opts , async (jwt_payload , done)=>{
        try {
            const student = await Student.findById(jwt_payload.id);
            if(!student){
                done(null , false);
            }else {
                done(null , user);
            }
        } catch (error) {
                console.log(error);
                throw error ;
        }
    }))
}
module.exports = {
    passportAuth
}
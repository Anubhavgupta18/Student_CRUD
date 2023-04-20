const Student = require('../models/student');

class StudentService{
    async create(data) {
        try {
            const student = await Student.create(data);
            return student;
        } catch (error) {
            console.log('Something went string in service layer')
            throw error;
        }
    }
    async destroy(studentId) {
        try {
            const response = await Student.findByIdAndDelete(studentId);
            return response;
        } catch (error) {
            console.log('Something went string in service layer')
            throw error;
        }
    }
    async update(studentId, data) {
        try {
            const student = await Student.findByIdAndUpdate(studentId,data,{new:true});
            return student;
        } catch (error) {
            console.log('Something went string in service layer')
            throw error;
        }
    }
    async get(studentId) {
        try {
            const student = await Student.findById(studentId);
            return student;
        } catch (error) {
            console.log('Something went string in service layer')
            throw error;
        }
    }
}

module.exports = StudentService;
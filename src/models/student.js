const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true
    },
}, { timestamps: true });


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
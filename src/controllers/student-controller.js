const StudentService = require('../services/student-service');

const studentService = new StudentService();

const create = async (req, res) => {
    try {
        const student = await studentService.create(req.body);
        res.status(201).json({
            student,
            message:'student created succesfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'unable to create a student',
            error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await studentService.destroy(req.params.id);
        res.status(201).json({
            response,
            message:'student deleted succesfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'unable to delete a student',
            error
        });
    }
}

const update = async (req, res) => {
    try {
        const student = await studentService.update(req.params.id,req.body);
        res.status(201).json({
            student,
            message:'student updated succesfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'unable to update a student',
            error
        });
    }
}

const get = async (req, res) => {
    try {
        const student = await studentService.get(req.params.id);
        res.status(201).json({
            student,
            message:'student fetched succesfully'
        });
    } catch (error) {
        res.status(400).json({
            message: 'unable to fetch a student',
            error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}



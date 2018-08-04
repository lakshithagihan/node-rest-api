module.exports = (app) => {
    const student = require('../controllers/student.controller.js');

    // Create a new profile
    app.post('/student', student.create);
}
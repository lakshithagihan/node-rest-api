module.exports = (app) => {
    const student = require('../controllers/student.controller.js');

    // Create a new collection
    app.post('/student', student.create);
}
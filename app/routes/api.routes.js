module.exports = (app) => {
    const api = require('../controllers/api.controller.js');

    // Create a new profile
    app.post('/api', api.create);

    // Retrieve all profiles
    app.get('/api', api.findAll);

    // Retrieve a single profile by ID
    app.get('/api/:apiId', api.findOne);

    // Update a profile with ID
    app.put('/api/:apiId', api.update);

    // Delete a profile with ID
    app.delete('/api/:apiId', api.delete);
}
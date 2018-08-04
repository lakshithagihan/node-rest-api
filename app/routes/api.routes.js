module.exports = (app) => {
    const api = require('../controllers/api.controller.js');

    // Create a new collection
    app.post('/api', api.create);

    // Retrieve all collections
    app.get('/api', api.findAll);

    // Retrieve a single collection apiId
    app.get('/api/:apiId', api.findOne);

    // Update a collection with apiId
    app.put('/api/:apiId', api.update);

    // Delete a collection with apiId
    app.delete('/api/:apiId', api.delete);
}
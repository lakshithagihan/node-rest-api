const API = require('../models/api.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "API content can not be empty"
        });
    }

    // Create a new collection
    const note = new API({
        title: req.body.title || "user", 
        content: req.body.content
    });

    // Save collection in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

    API.find()
    .then(profile => {
        res.send(profile);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

};

// Find a single profile with a apiId
exports.findOne = (req, res) => {

    API.findById(req.params.apiId)
    .then(profile => {
        if(!profile) {
            return res.status(404).send({
                message: "Profile not found with id " + req.params.apiId
            });            
        }
        res.send(profile);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Profile not found with id " + req.params.apiId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.apiId
        });
    });

};

// Update a note identified by the apiId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
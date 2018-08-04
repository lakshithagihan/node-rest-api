const API = require('../models/api.model.js');

// Create and Save a new profile
exports.create = (req, res) => {

    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "API content can not be empty"
        });
    }

    // Create a new profile
    const note = new API({
        title: req.body.title || "user", 
        content: req.body.content
    });

    // Save profile in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while creating the profile."
        });
    });

};

// Retrieve and return all profiles from the database.
exports.findAll = (req, res) => {

    API.find()
    .then(profile => {
        res.send(profile);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving the profiles."
        });
    });

};

// Find a single profile with a ID
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
            message: "Error retrieving profile with id " + req.params.apiId
        });
    });

};

// Update profile identified by the ID in the request
exports.update = (req, res) => {

};

// Delete profile with the specified ID in the request
exports.delete = (req, res) => {

};
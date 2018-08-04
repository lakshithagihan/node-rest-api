const Student = require('../models/student.model.js');

// Create and Save a new student profile
exports.create = (req, res) => {

    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Student name can not be empty"
        });
    }
    if(!req.body.class) {
        return res.status(400).send({
            message: "Student class can not be empty"
        });
    }

    // Create a new student profile
    const note = new Student({
        name: req.body.name || "student", 
        class: req.body.class
    });

    // Save profile in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while creating the student profile."
        });
    });

};

// Retrieve and return all student profiles from the database.
exports.findAll = (req, res) => {

    API.find()
    .then(profile => {
        res.send(profile);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving the student profiles."
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

// Update a note identified by the apiId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
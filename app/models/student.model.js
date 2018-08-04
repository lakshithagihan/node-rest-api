const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: String,
    class: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
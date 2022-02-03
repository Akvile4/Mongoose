const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    actor: {
        type: String,
        default: "actor uknown"
    }
})

const FilmModel = mongoose.model('Movies', filmSchema);

module.exports = FilmModel;
const mongoose = require('mongoose');
const { number } = require('yargs');

const filmSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    actor: {
        type: String,
        default: "actor uknown"
    },
    genre: {
        type: String,
        default: "genre uknown"
    },
    year: {
        type: Number,
        require: true,
    }
})

const FilmModel = mongoose.model('Movies', filmSchema);

module.exports = FilmModel;